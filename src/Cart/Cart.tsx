import React from 'react';
import {Button, Grid, IconButton, Stack} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useSelector} from "react-redux";
import {AppRootState} from "../storeAndReducers/store";
import {ProductType} from "../storeAndReducers/product-reducer";
import styles from './Cart.module.css'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Cart = () => {

    const myCart = useSelector<AppRootState, Array<ProductType>>(state => state.cart)

    return (

        <div className={styles.cartPage}>
            <div className={styles.container}>
                Your CART
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
                            <IconButton color="primary" onClick={()=> alert('minus')}>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>

                            1
                            <IconButton color="primary" onClick={()=> alert('plus')}>
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
            <Button variant={ 'contained'}
                    onClick={()=> alert('go to your data')}
                    color={'success'}
            >
                Checkout
            </Button>
            </div>
        </div>
    )

}


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));