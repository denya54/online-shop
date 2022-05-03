import {productsReducer} from "./product-reducer";
import {combineReducers, createStore} from "redux";
import {cartReducer} from "./cart-reducer";


const rootReducer = combineReducers ({
    products: productsReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>