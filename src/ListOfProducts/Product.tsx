import React from 'react';
import {ProductType} from "../storeAndReducers/product-reducer";
import {Button} from "@mui/material";

type ProductPropsType = {
    productDescription: ProductType
}

export const Product = (props: ProductPropsType) => {

    return <div>
        <h3>{props.productDescription.productName}</h3>
        <p>{props.productDescription.productProducer}</p>
        <img src={props.productDescription.image}
             style={{ height: 250, width: 200}}
        />
        <p>Price: {props.productDescription.cost}$</p>

        <div style={{paddingTop: '10px'}}>
            <Button variant={ 'outlined'}
                    onClick={()=> alert('go to your basket')}
                    color={'inherit'}
            >add to cart
            </Button>

        </div>
    </div>
}

