import {Dispatch} from "redux";
import {phonesAPI} from "../api/api";

export type ProductType = {
    id: number
    productName: string
    productProducer: string
    cost: number
    image: string
    quantity: number
}

const initialState: Array<ProductType> = [
    {
        id: 1,
        productName: 'Iphone 13',
        productProducer: 'Apple',
        cost: 850,
        image: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg',
        quantity: 1
    },

    {
        id: 2,
        productName: 'Iphone 12',
        productProducer: 'Apple',
        cost: 800,
        image: 'https://content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg',
        quantity: 1
    },

    {
        id: 3,
        productName: 'Iphone 11',
        productProducer: 'Apple',
        cost: 600,
        image: 'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg',
        quantity: 1
    },

    {
        id: 4,
        productName: 'Iphone XR',
        productProducer: 'Apple',
        cost: 400,
        image: 'https://content2.onliner.by/catalog/device/header/98b65279323ea2beeba0c347f365f728.jpeg',
        quantity: 1
    },
    {
        id: 5,
        productName: 'Iphone 12 mini',
        productProducer: 'Apple',
        cost: 650,
        image: 'https://content2.onliner.by/catalog/device/header/addec6d2c3971bbcdade43d8173d870b.jpeg',
        quantity: 1
    },

    {
        id: 6,
        productName: 'Iphone SE 2022',
        productProducer: 'Apple',
        cost: 550,
        image: 'https://content2.onliner.by/catalog/device/header/c1c9b8d9f87b130ee6ee5554ad3f0b13.jpeg',
        quantity: 1
    },
];

export const productsReducer = (state: Array<ProductType> = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export const setListOfPhonesAC = (listOfPhones: any) => ({type: 'SET-PHONES', listOfPhones} as const)


export const setListOfPhonesTC = () => {
    return (dispatch: any) => {
        // dispatch(setAppStatusAC('loading'))
        phonesAPI.getPhones()
            .then((res) => {
                debugger

            })
        // todolistsAPI.getTodolists()
        //     .then((res) => {
        //         dispatch(setTodolistsAC(res.data))
        //         dispatch(setAppStatusAC('succeeded'))
        //     })
        //     .catch((err) => {
        //         dispatch(setAppErrorAC(err.message))
        //         dispatch(setAppStatusAC('failed'))
        //     })
    }
}