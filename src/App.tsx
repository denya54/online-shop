import React from 'react';
import './App.css';
import {ListOfProducts} from "./ListOfProducts/ListOfProducts";
import {AppBar, Box, Button, Container, FormGroup, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import {Cart} from "./Cart/Cart";
import {OrderPage} from "./OrderPage/OrderPage";


function App() {
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Shop Online
                        </Typography>
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={()=> alert('hi')}
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
                    <ListOfProducts/>
                    <Cart/>
                    <OrderPage/>
                </Container>
            </Box>
        </div>
    )

}



export default App;
