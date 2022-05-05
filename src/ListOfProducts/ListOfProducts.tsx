import {useSelector} from "react-redux";
import {AppRootState} from "../storeAndReducers/store";
import {ProductType} from "../storeAndReducers/product-reducer";
import {Product} from "./Product";
import {Button, Grid, Paper} from "@mui/material";
import React from "react";
import { useNavigate} from "react-router-dom";

export const ListOfProducts = () => {

    const navigate = useNavigate();
    const redirectToCart = () => navigate('/cart')


    const products = useSelector<AppRootState, Array<ProductType>>(state => state.products)

    return <>
        <Grid container style={{padding: '20px'}}>

        </Grid>
        <Grid container spacing={3}>
            {
                products.map(prod => {

                    return <Grid item key={prod.id}>
                        <Paper style={{padding: '10px'}}>
                            <Product
                                key={prod.id}
                                productDescription={prod}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
        <Button variant={ 'contained'}
                onClick={redirectToCart}
                color={'success'}
        >
            GO TO CART
        </Button>
    </>
}