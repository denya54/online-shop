import React, {useState} from 'react';
import {Button, IconButton, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../storeAndReducers/store";
import styles from './Cart.module.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useNavigate} from "react-router-dom";
import {InitialStateCart, minusOneProductAC, plusOneProductAC} from "../storeAndReducers/cart-reducer";

type CartPropsType = {
    totalCost: number | null
}

export const Cart = (props: CartPropsType) => {

    const navigate = useNavigate();
    const redirectToOrderPage = () => navigate('/order')
    const dispatch = useDispatch()

    const myCart = useSelector<AppRootState, InitialStateCart>(state => state.cart)

    if (myCart.length > 0) {
        return (

            <div className={styles.cartPage}>
                <div className={styles.container}>
                    <TitleForPage text={'Your CART'}/>

                    <Stack spacing={2}>
                        {myCart.map(pr => {
                            return <Item key={pr.id}>
                                <div key={pr.id} className={styles.product}>
                                    <div className={styles.image}><img src={pr.image}/></div>
                                    <div className={styles.productDescription}>
                                        <h4>{pr.productName}</h4>
                                        <p>{pr.productProducer}</p>
                                        <p>Price: {pr.cost}$</p>
                                    </div>
                                    <div className={styles.productOptions}>
                                        <IconButton color="primary" onClick={() => dispatch(minusOneProductAC(pr.id, pr.quantity))}>
                                            <RemoveCircleOutlineIcon/>
                                        </IconButton>

                                        {pr.quantity}
                                        <IconButton color="primary" onClick={() =>  dispatch(plusOneProductAC(pr.id))}>
                                            <AddCircleOutlineIcon/>
                                        </IconButton>

                                    </div>

                                </div>
                            </Item>
                        })}
                    </Stack>

                </div>
                Total price: {props.totalCost}$
                <div>
                    <Button variant={'contained'}
                            onClick={redirectToOrderPage}
                            color={'success'}
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        )
    } else {
        return <TitleForPage text={'Your CART is empty'}/>
    }
}


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Div = styled('div')(({theme}) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

export const TitleForPage = (props: { text: string }) => {
    return <Div>{props.text}</Div>;
}
