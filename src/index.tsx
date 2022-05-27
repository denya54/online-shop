import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./storeAndReducers/store";
import {BrowserRouter, HashRouter} from "react-router-dom";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyC9MKkWELs2MS5-yEyMFp6xZcalSYirpFE",
    authDomain: "shop-online-firebase1.firebaseapp.com",
    databaseURL: "https://shop-online-firebase1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shop-online-firebase1",
    storageBucket: "shop-online-firebase1.appspot.com",
    messagingSenderId: "366225161384",
    appId: "1:366225161384:web:432d2426161ff6c94a169d"
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
            <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
