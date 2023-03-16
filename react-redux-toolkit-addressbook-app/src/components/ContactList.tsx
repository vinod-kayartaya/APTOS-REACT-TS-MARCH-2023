import { useDispatch, useSelector } from 'react-redux';
import { RootStoreType } from '../redux/store';
import { deleteContact, selectContact } from '../redux/contactSlice';

const ContactList = () => {
    const { contacts } = useSelector(
        (store: RootStoreType) => store.contactReducerState
    );

    const dispatch = useDispatch();

    return (
        <>
            <h5 className='mt-3 mb-3'>List of contacts</h5>
            <ul className='list-group'>
                {contacts.map((c) => (
                    <li className='list-group-item' key={c.id}>
                        <div className='row'>
                            <div
                                className='col-10'
                                style={{ cursor: 'pointer' }}
                                onClick={() => dispatch(selectContact(c))}
                            >
                                {c.firstname} {c.lastname}
                            </div>
                            <div className='col'>
                                <button
                                    className='btn btn-link'
                                    onClick={() =>
                                        dispatch(deleteContact(c.id))
                                    }
                                >
                                    <i className='bi bi-trash'></i>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactList;
