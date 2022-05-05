import {Button, FormControl, FormGroup, Grid, TextField} from "@mui/material";
import React from "react";
import {TitleForPage} from "../Cart/Cart";


export const OrderPage = () => {
    return (
        <div>
            <TitleForPage text={'Please, write on the forms'}/>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    // формик сюда
                    <FormControl>
                        <FormGroup>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                value={''}
                                margin="normal"
                                //onChange={handleChange}
                            />
                            <TextField
                                id="outlined-name"
                                label="Surname"
                                value={''}
                                margin="normal"
                                //onChange={handleChange}
                            />
                            <TextField
                                id="outlined-name"
                                label="Address"
                                value={''}
                                margin="normal"
                                //onChange={handleChange}
                            />
                            <TextField
                                id="outlined-name"
                                label="Phone"
                                value={''}
                                margin="normal"
                                //onChange={handleChange}
                            />
                            To pay: 0$
                            <Button variant={'contained'}
                                    onClick={() => alert('thank you for your order')}
                                    color={'success'}
                            >
                                ORDER
                            </Button>

                        </FormGroup>
                    </FormControl>
                    //формик закрыть
                </Grid>
            </Grid>
        </div>
    )
};

