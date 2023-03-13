import { Product } from "./datatypes";

const initialState = {
    products: [
        {
            id: 3,
            category: 'vegetable',
            name: 'Tomato',
            brand: 'Malnad',
            description: 'Hybrid tomato',
            quantity_per_unit: '500 GM, approx. 6 to 7 nos',
            unit_price: 28,
            picture:
                'http://localhost:8080/product-images/10000201_12-fresho-tomato-hybrid.jpg',
            discount: 12,
        },
        {
            id: 4,
            category: 'vegetable',
            name: 'Ladies finger',
            brand: 'Fresho',
            description: 'Ladies Finger',
            quantity_per_unit: '250 GM',
            unit_price: 18,
            picture:
                'http://localhost:8080/product-images/10000143_13-fresho-ladies-finger.jpg',
            discount: 24,
        },
        {
            id: 5,
            category: 'vegetable',
            name: 'Carrot',
            brand: 'Malnad',
            description: 'Carrot local',
            quantity_per_unit: '500 GM, approx. 7 to 8 nos',
            unit_price: 36,
            picture:
                'http://localhost:8080/product-images/10000071_13-fresho-carrot-local.jpg',
            discount: 16,
        },
        {
            id: 6,
            category: 'fruit',
            name: 'Apple',
            brand: 'Malnad',
            description: 'Apple shimla',
            quantity_per_unit: 'Half dozen, 6 nos',
            unit_price: 110,
            picture:
                'http://localhost:8080/product-images/20001477_15-fresho-apple-shimla.jpg',
            discount: 1,
        },
        {
            id: 7,
            category: 'fruit',
            name: 'Banana',
            brand: 'Malnad',
            description: 'Banana Yelakki',
            quantity_per_unit: '500 GM, approx 8 to 9 nos',
            unit_price: 29,
            picture:
                'http://localhost:8080/product-images/10000033_19-fresho-banana-yelakki.jpg',
            discount: 18,
        },
        {
            id: 8,
            category: 'fruit',
            name: 'Pomegranate',
            brand: 'Fresho',
            description: 'Pomegranate - Kesar',
            quantity_per_unit: '1 KG, approx. 4 to 5 nos',
            unit_price: 141,
            picture:
                'http://localhost:8080/product-images/10000269_12-fresho-pomegranate-kesar.jpg',
            discount: 1,
        },
        {
            id: 9,
            category: 'vegetable',
            name: 'Capsicum',
            brand: 'Malnad',
            description: 'Capsicum Hybrid Green',
            quantity_per_unit: '250 GM, approx. 2 to 3 nos',
            unit_price: 13,
            picture:
                'http://localhost:8080/product-images/10000068_17-fresho-capsicum-hybrid-green.jpg',
            discount: 5,
        },
        {
            id: 10,
            category: 'vegetable',
            name: 'Ginger',
            brand: 'Malnad',
            description: 'Fresh Ginger - Grade A',
            quantity_per_unit: '100 GM',
            unit_price: 9,
            picture:
                'http://localhost:8080/product-images/10000117_14-fresho-fresh-ginger-grade-a.jpg',
            discount: 3,
        },
    ]
}

interface State {
    products: Array<Product>
}

interface Action {
    type: string;
    payload?: any;
}

const productReducer = (state: State = initialState, action: Action) => {

    return { ...state };
}

export default productReducer;