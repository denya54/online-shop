import {ProductType} from "./product-reducer"

export type InitialStateCart = Array<ProductType>

const initialState: InitialStateCart = []

export const cartReducer = (state: InitialStateCart = initialState, action: ActionCartType) => {
    switch (action.type) {
        case "ADD-PRODUCT-TO-CARD": {

            return [action.product, ...state]
        }
        default:
            return state
    }
}

export const addProductToCartAC = (product: ProductType) => {
    return {
        type: 'ADD-PRODUCT-TO-CARD', product: product
    }
}



type ActionCartType = ReturnType<typeof addProductToCartAC>