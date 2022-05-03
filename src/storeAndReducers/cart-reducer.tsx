import {ProductType} from "./product-reducer";

const initialState: Array<ProductType> = [
    {
        id: 1,
        productName: 'Iphone 13',
        productProducer: 'Apple',
        cost: 850,
        image: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg'
    },

    {
        id: 2,
        productName: 'Iphone 12',
        productProducer: 'Apple',
        cost: 800,
        image: 'https://content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg'
    }]

export const cartReducer = (state: Array<ProductType> = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}