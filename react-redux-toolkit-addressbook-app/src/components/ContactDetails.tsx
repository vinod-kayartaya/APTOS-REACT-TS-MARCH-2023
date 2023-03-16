import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditing } from '../redux/contactSlice';
import { RootStoreType } from '../redux/store';

const ContactDetails = () => {
    const { selectedContact } = useSelector(
        (store: RootStoreType) => store.contactReducerState
    );
    const dispatch = useDispatch();

    return (
        <>
            <h5 className='mt-3 mb-3'>Contact details</h5>
            {'id' in selectedContact || <p>Please select a contact</p>}

            {'id' in selectedContact && (
                <>
                    <table className='table table-hover'>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{selectedContact.id}</td>
                            </tr>
                            <tr>
                                <td>Firstname</td>
                                <td>{selectedContact.firstname}</td>
                            </tr>
                            <tr>
                                <td>Lastname</td>
                                <td>{selectedContact.lastname}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{selectedContact.email}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{selectedContact.city}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button
                        onClick={() => dispatch(setIsEditing(true))}
                        className='btn btn-primary'
                    >
                        Edit this contact
                    </button>
                </>
            )}
        </>
    );
};

export default ContactDetails;
