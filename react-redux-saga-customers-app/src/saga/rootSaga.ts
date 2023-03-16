import { all, fork } from "redux-saga/effects";
import CustomerSaga from "./customerSaga";

export default function* rootSaga() {
    yield all([fork(CustomerSaga)]);
}