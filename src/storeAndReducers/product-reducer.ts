type ProductType = {
    productName: string
    productProducer: string
    cost: number
    image: string
}

const initialState: Array<ProductType> = [
    {
        productName: 'Iphone 13',
        productProducer: 'Apple',
        cost: 850,
        image: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg'
    },

    {
        productName: 'Iphone 12',
        productProducer: 'Apple',
        cost: 800,
        image: 'https://content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg'
    },

    {
        productName: 'Iphone 11',
        productProducer: 'Apple',
        cost: 600,
        image: 'https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg'
    },
];

export const productsReducer = (state: Array<ProductType> = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}