import React from 'react';
import {ProductType} from "../storeAndReducers/product-reducer";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {addProductToCartAC} from "../storeAndReducers/cart-reducer";

type ProductPropsType = {
    productDescription: ProductType
}

export const Product = (props: ProductPropsType) => {

    const dispatch = useDispatch()


    const addProductToCart = (product: ProductType) => {
        dispatch(addProductToCartAC(product))
    }

    return <div>
        <h3>{props.productDescription.productName}</h3>
        <p>{props.productDescription.productProducer}</p>
        <img src={props.productDescription.image}
             style={{ height: 250, width: 200}}
        />
        <p>Price: {props.productDescription.cost}$</p>

        <div style={{paddingTop: '10px'}}>
            <Button variant={ 'outlined'}
                    onClick={()=> addProductToCart(props.productDescription)}
                    color={'inherit'}
            >add to cart
            </Button>

        </div>
    </div>
}

