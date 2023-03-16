import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteCustomer,
    fetchCustomers,
} from '../redux/customerActionCreators';
import { RootStoreType } from '../redux/store';

const CustomerList = () => {
    const { customers } = useSelector(
        (store: RootStoreType) => store.customerReducerState
    );

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('CustomerList component mounted');
        dispatch(fetchCustomers());
    }, []);

    return (
        <>
            <h5 className='mt-3 mb-3'>Customer list</h5>

            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        dispatch(deleteCustomer(c.id))
                                    }
                                    className='btn btn-link'
                                >
                                    <i className='bi bi-trash'></i>
                                </button>
                                {c.firstname} {c.lastname}
                            </td>
                            <td>{c.email}</td>
                            <td>{c.gender}</td>
                            <td>{c.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default CustomerList;
