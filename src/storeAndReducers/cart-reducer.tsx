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
        case "PLUS-ONE-PRODUCT": {
            return state.map(pr => pr.id === action.productID ? {...pr, quantity: pr.quantity + 1} : pr)
        }
        case "MINUS-ONE-PRODUCT": {
            if (action.productQuantity > 1) {
                return state.map(pr => pr.id === action.productID ? {...pr, quantity: pr.quantity - 1} : pr)
            }
            return state.filter(pr => pr.id !== action.productID)
        }
        default:
            return state
    }
}

export const addProductToCartAC = (product: ProductType) => {
    return {
        type: 'ADD-PRODUCT-TO-CARD', product: product
    } as const
}

export const plusOneProductAC = (productID: number) => {
    return {
        type: 'PLUS-ONE-PRODUCT', productID: productID
    } as const
}

export const minusOneProductAC = (productID: number, productQuantity: number) => {
    return {
        type: 'MINUS-ONE-PRODUCT', productID: productID, productQuantity
    } as const
}


type ActionCartType = ReturnType<typeof addProductToCartAC>
    | ReturnType<typeof plusOneProductAC>
    | ReturnType<typeof minusOneProductAC>