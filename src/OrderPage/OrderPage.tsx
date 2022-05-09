import {Button, FormControl, FormGroup, Grid, TextField} from "@mui/material";
import React from "react";
import {TitleForPage} from "../Cart/Cart";
import {useFormik} from "formik";

type FormikErrorType = {
    name?: string
    surname?: string
    address?: string
    phone?: string
}



type OrderPagePropsType = {
    totalCost: number | null
}

export const OrderPage = (props: OrderPagePropsType) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!values.phone) {
                errors.phone = 'Required';
            }
            return errors;
        },

        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    })



    return (
        <div>
            <TitleForPage text={'Please, write on the forms'}/>
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                   <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                margin="normal"
                                {...formik.getFieldProps('name')}

                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && <div style={{color: 'red'}}>{formik.errors.name}</div>}
                            <TextField
                                id="outlined-name"
                                label="Surname"
                                margin="normal"
                                {...formik.getFieldProps('surname')}
                            />
                            <TextField
                                id="outlined-name"
                                label="Address"
                                margin="normal"
                                {...formik.getFieldProps('address')}
                            />
                            <TextField
                                id="outlined-name"
                                label="Phone"
                                margin="normal"
                                {...formik.getFieldProps('phone')}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone && <div style={{color: 'red'}}>{formik.errors.phone}</div>}
                            To pay: {props.totalCost}$
                            <Button variant={'contained'}
                                    color={'success'}
                                    type={'submit'}
                            >
                                ORDER
                            </Button>

                        </FormGroup>
                    </FormControl>
                   </form>
                </Grid>
            </Grid>
        </div>
    )
};

