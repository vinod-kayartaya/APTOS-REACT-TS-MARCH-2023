import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { DELETE_CUSTOMER, FETCH_CUSTOMERS } from '../redux/actionTypes';
import { deleteCustomerFailure, deleteCustomerSuccess, fetchCustomersFailure, fetchCustomersSuccess } from '../redux/customerActionCreators';
import { ICustomer } from '../redux/customerReducer';

const baseUrl = 'http://localhost:8080/customers/';
interface IAxiosResponse {
    headers: any;
    data: any;
    config: any;
    status: any;
    statusText: any;
    request: any;
}

function* CustomerSaga() {
    yield takeLatest(FETCH_CUSTOMERS, onFetchCustomers);
    yield takeLatest(DELETE_CUSTOMER, onDeleteCustomer);
}

const fetchCustomers = async () => {
    return await axios.get(baseUrl);
};

const deleteCustomer = async (id: number) => {
    return await axios.delete(baseUrl + id);
};

function* onFetchCustomers(action: any) {
    try {
        const resp: IAxiosResponse = yield call(fetchCustomers);
        // dispatch the FETCH_CUSTOMERS_SUCCESS
        yield put(fetchCustomersSuccess(resp.data as ICustomer[]));
    }
    catch (err: any) {
        yield put(fetchCustomersFailure(err.response.data));
    }
}
function* onDeleteCustomer(action: any) {
    try {
        yield call(deleteCustomer, action.payload);
        yield put(deleteCustomerSuccess(action.payload));
    }
    catch (err: any) {
        yield put(deleteCustomerFailure(err.response.data));
    }
}

export default CustomerSaga;