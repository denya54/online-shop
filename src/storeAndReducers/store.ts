import {productsReducer} from "./product-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {cartReducer} from "./cart-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage";


const rootReducer = combineReducers ({
    products: productsReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(()=> {
    saveState(store.getState())
})

export type AppRootState = ReturnType<typeof rootReducer>