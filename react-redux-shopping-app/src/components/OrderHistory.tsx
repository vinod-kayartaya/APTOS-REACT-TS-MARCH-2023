import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthetntication } from '../hoc/withAuthentication';
import { fetchOrderHistory } from '../redux/actions/ordersActionCreators';
import { RootStoreType } from '../redux/store';

const OrderHistory = () => {
    const dispatch = useDispatch();
    const { loggedInUser } = useSelector(
        (store: RootStoreType) => store.authReducerState
    );
    const { orders } = useSelector(
        (store: RootStoreType) => store.ordersReducerState
    );

    useEffect(() => {
        (async () => {
            const action = await fetchOrderHistory();
            dispatch(action);
        })();
    }, [dispatch]);

    return (
        <>
            <h5 className='mt-3 mb-3'>
                Order history for customer {loggedInUser.name}
            </h5>
            <table className='table table-bordered table-striped talbe-hover'>
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Order ID</th>
                        <th>Order date</th>
                        <th>Status</th>
                        <th className='text-end'>Item count</th>
                        <th className='text-end'>Order amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((o, index) => (
                        <tr key={o.id}>
                            <td>{index + 1}</td>
                            <td>{o.id}</td>
                            <td>{o.orderDate}</td>
                            <td>{o.orderStatus}</td>
                            <td className='text-end'>
                                {o.lineItems
                                    ?.map((li) => li.quantity)
                                    .reduce((a, b) => a + b)}
                            </td>
                            <td className='text-end'>
                                {o.lineItems
                                    ?.map(
                                        (li) =>
                                            li.product.unit_price * li.quantity
                                    )
                                    .reduce((a, b) => a + b)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default withAuthetntication(OrderHistory);
