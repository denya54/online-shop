import {ProductType} from "./product-reducer"

export type InitialStateCart = Array<ProductType>

const initialState: InitialStateCart = []

export const cartReducer = (state: InitialStateCart = initialState, action: ActionCartType) => {
    switch (action.type) {
        case "ADD-PRODUCT-TO-CARD": {
            if (state.length !== 0) {
                let idsStates = state.map(pr => pr.id)
                if (idsStates.find(id => id == action.product.id)) {
                    return state.map(pr => pr.id === action.product.id ? {...pr, quantity: pr.quantity + 1} : pr)
                } else {
                    return [action.product, ...state]
                }
            }
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