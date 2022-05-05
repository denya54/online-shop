import React from 'react';
import './App.css';
import {ListOfProducts} from "./ListOfProducts/ListOfProducts";
import {AppBar, Box, Container, FormGroup, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import {Cart} from "./Cart/Cart";
import {OrderPage} from "./OrderPage/OrderPage";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";


function App() {

    const navigate = useNavigate();
    const redirectToShop = () => navigate('/')
    const redirectToCart = () => navigate('/cart')

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
                                    700$
                                </IconButton>
                            </div>

                        </Toolbar>
                    </AppBar>

                </FormGroup>
                <Container fixed>
                    <Routes>
                      <Route path='/' element={<ListOfProducts/>} />
                      <Route path='/cart' element={<Cart/>} />
                      <Route path='/order' element={<OrderPage/>} />
                      <Route path='/404' element={<h1>404 - Page not found</h1>} />
                      <Route path='*' element={<Navigate to={'/404'}/>} />
                    </Routes>
                </Container>
            </Box>
        </div>

    )

}


export default App;
