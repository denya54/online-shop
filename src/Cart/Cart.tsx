import React from 'react';
import {Button, IconButton, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useSelector} from "react-redux";
import {AppRootState} from "../storeAndReducers/store";
import styles from './Cart.module.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useNavigate} from "react-router-dom";
import {InitialStateCart} from "../storeAndReducers/cart-reducer";

export const Cart = () => {

    const navigate = useNavigate();
    const redirectToOrderPage = () => navigate('/order')


    const myCart = useSelector<AppRootState, InitialStateCart>(state => state.cart)
    if (myCart !== null) {
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
                                        <IconButton color="primary" onClick={() => alert('minus')}>
                                            <RemoveCircleOutlineIcon/>
                                        </IconButton>

                                        1
                                        <IconButton color="primary" onClick={() => alert('plus')}>
                                            <AddCircleOutlineIcon/>
                                        </IconButton>

                                    </div>

                                </div>
                            </Item>
                        })}
                    </Stack>

                </div>
                Total price:
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
