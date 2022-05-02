import {productsReducer} from "./product-reducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers ({
    products: productsReducer
})

export const store = createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>