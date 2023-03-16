import { DELETE_CUSTOMER, DELETE_CUSTOMER_FAILURE, DELETE_CUSTOMER_SUCCESS, FETCH_CUSTOMERS, FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_SUCCESS } from "./actionTypes";

export interface ICustomer {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    city: string;
    gender: string;
}

interface IState {
    customers: ICustomer[];
    loading: boolean;
    error: string;
}

interface IAction {
    type: string;
    payload?: any;
}

const initialState: IState = {
    customers: [],
    loading: false,
    error: ''
};

const customerReducer = (state: IState = initialState, action: IAction): IState => {
    console.log('customerReducer called with action', action);
    if (action.type === FETCH_CUSTOMERS || action.type === DELETE_CUSTOMER) {
        return { ...state, loading: true, error: '' };
    }

    if (action.type === FETCH_CUSTOMERS_SUCCESS) {
        return { ...state, customers: action.payload, loading: false, error: '' };
    }

    if (action.type === FETCH_CUSTOMERS_FAILURE || action.type === DELETE_CUSTOMER_FAILURE) {
        return { ...state, loading: false, error: action.payload };
    }

    if (action.type === DELETE_CUSTOMER_SUCCESS) {
        const customers = [...state.customers];
        const index = customers.findIndex(c => c.id === action.payload);
        if (index !== -1) {
            customers.splice(index, 1);
        }
        return { ...state, customers, loading: false, error: '' };
    }

    return { ...state };
};

export default customerReducer;