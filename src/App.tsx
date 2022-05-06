import React from 'react';
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

// function for sum our cart
function arraySum(array: Array<number>){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    if (sum === 0) {
        return null
    } else {
        return sum
    }
}

function App() {

    const navigate = useNavigate();
    const redirectToShop = () => navigate('/')
    const redirectToCart = () => navigate('/cart')

    const myCart = useSelector<AppRootState, InitialStateCart>(state => state.cart)

    const totalCost = arraySum(myCart.map(pr => pr.cost))

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
