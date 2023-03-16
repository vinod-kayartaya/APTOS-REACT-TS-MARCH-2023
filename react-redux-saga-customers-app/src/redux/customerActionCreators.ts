import { DELETE_CUSTOMER, DELETE_CUSTOMER_FAILURE, DELETE_CUSTOMER_SUCCESS, FETCH_CUSTOMERS, FETCH_CUSTOMERS_SUCCESS } from "./actionTypes";
import { ICustomer } from "./customerReducer";

export const fetchCustomers = () => ({
    type: FETCH_CUSTOMERS
});

export const fetchCustomersSuccess = (customers: ICustomer[]) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers
});

export const fetchCustomersFailure = (error: string) => ({
    type: FETCH_CUSTOMERS,
    payload: error
});

export const deleteCustomer = (id: number) => ({
    type: DELETE_CUSTOMER,
    payload: id
});

export const deleteCustomerSuccess = (id: number) => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload: id
});

export const deleteCustomerFailure = (err: string) => ({
    type: DELETE_CUSTOMER_FAILURE,
    payload: err
});