import React from 'react';
import './App.css';
import {ListOfProducts} from "./ListOfProducts/ListOfProducts";
import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';


function App() {

  //return (
  //  <div className="App">
    // <ListOfProducts/>
   // </div>
 // );

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Shop Online
                    </Typography>
                    <ShoppingCartCheckoutTwoToneIcon/>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <ListOfProducts/>
            </Container>
        </div>
    )


}



export default App;
