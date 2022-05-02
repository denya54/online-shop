import {useSelector} from "react-redux";
import {AppRootState} from "../storeAndReducers/store";
import {ProductType} from "../storeAndReducers/product-reducer";
import {Product} from "./Product";
import {Grid, Paper} from "@mui/material";

export const ListOfProducts = () => {

    const products = useSelector<AppRootState, Array<ProductType>>(state => state.products)

    return <>
        <Grid container style={{padding: '20px'}}>

        </Grid>
        <Grid container spacing={3}>
            {
                products.map(prod => {

                    return <Grid item key={prod.id}>
                        <Paper style={{padding: '10px'}}>
                            <Product
                                key={prod.id}
                                productDescription={prod}
                            />
                        </Paper>
                    </Grid>
                })
            }
        </Grid>
    </>
}