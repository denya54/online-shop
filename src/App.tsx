import React, {useEffect} from 'react';
import './App.css';
import {ListOfProducts} from "./ListOfProducts/ListOfProducts";
import {AppBar, Box, Container, FormGroup, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import {Cart} from "./Cart/Cart";
import {OrderPage} from "./OrderPage/OrderPage";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootState} from "./storeAndReducers/store";
import {InitialStateCart} from "./storeAndReducers/cart-reducer";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set  } from "firebase/database";
import {firebaseConfig} from "./index";

// function for sum our cart
function arraySum(arrayCost: Array<number>, arrayQuantity: Array<number>){
    let sum = 0;
    for(let i = 0; i < arrayCost.length; i++){
        sum += arrayCost[i] * arrayQuantity[i];
    }
    if (sum === 0) {
        return null
    } else {
        return sum
    }
}

function App() {
    const app = initializeApp(firebaseConfig)
    const database = getDatabase();
    function writePhoneData(id: number, productName: string, productProducer: string, cost: number, image: string, quantity: number) {
        const db = getDatabase();
        set(ref(db, 'phones/' + id), {
            productName: productName,
            productProducer: productProducer,
            cost : cost,
            image: image,
            quantity: quantity
        });
    }
    // writePhoneData(1, 'Iphone 13', 'Apple', 850, 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg', 1)
    // writePhoneData(2, 'Iphone 12', 'Apple', 800, 'https://content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg', 1)
    // writePhoneData(3, 'Iphone 11', 'Apple', 600, 'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg', 1)
    // writePhoneData(4, 'Iphone XR', 'Apple', 400, 'https://content2.onliner.by/catalog/device/header/98b65279323ea2beeba0c347f365f728.jpeg', 1)
    // writePhoneData(5, 'Iphone 12 mini', 'Apple', 650, 'https://content2.onliner.by/catalog/device/header/addec6d2c3971bbcdade43d8173d870b.jpeg', 1)
    // writePhoneData(6, 'Iphone SE 2022', 'Apple', 550, 'https://content2.onliner.by/catalog/device/header/c1c9b8d9f87b130ee6ee5554ad3f0b13.jpeg', 1)
    console.log(database)
    // useEffect(()=> {
    //     const app = initializeApp(firebaseConfig);
    //     const database = getDatabase(app);
    //     console.log(database)
    //
    // }, [])

    const navigate = useNavigate();
    const redirectToShop = () => navigate('/')
    const redirectToCart = () => navigate('/cart')

    const myCart = useSelector<AppRootState, InitialStateCart>(state => state.cart)

    let arrayQuantity = myCart.map(pr => pr.quantity)
    let arrayCost = myCart.map(pr => pr.cost)

    const totalCost = arraySum(arrayCost, arrayQuantity)

    return (
        <div className="App">
            <Box sx={{flexGrow: 1}}>
                <FormGroup>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                onClick={redirectToShop}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{mr: 2}}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Shop Online
                            </Typography>
                            <div>
                                <IconButton
                                    onClick={redirectToCart}
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <ShoppingCartCheckoutTwoToneIcon/>
                                    {totalCost}$
                                </IconButton>
                            </div>

                        </Toolbar>
                    </AppBar>

                </FormGroup>
                <Container fixed>
                    <Routes>
                      <Route path='/' element={<ListOfProducts/>} />
                      <Route path='/cart' element={<Cart totalCost={totalCost}/>} />
                      <Route path='/order' element={<OrderPage totalCost={totalCost}/>} />
                      <Route path='/404' element={<h1>404 - Page not found</h1>} />
                      <Route path='*' element={<Navigate to={'/404'}/>} />
                    </Routes>
                </Container>
            </Box>
        </div>

    )

}


export default App;
