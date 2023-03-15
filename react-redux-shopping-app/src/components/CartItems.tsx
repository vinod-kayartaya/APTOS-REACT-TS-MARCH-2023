import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineItem, Product } from '../redux/datatypes';
import { RootStoreType } from '../redux/store';
import AddToCartButton from './AddToCartButton';
import { removeFromCart, emptyCart } from '../redux/actions/cartActionCreators';
import { createOrder } from '../redux/actions/ordersActionCreators';
import { withRouter } from '../hoc/withRouter';
import { useLocation, useNavigate } from 'react-router-dom';

interface CartItemsProps {
    cart: LineItem[];
    removeFromCart: (product: Product) => void;
    emptyCart: () => void;
    isAuthenticated: boolean;
    createOrder: (cart: LineItem[]) => void;
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}
interface CartItemsState {}

export class CartItems extends Component<CartItemsProps, CartItemsState> {
    handlePlaceOrder = () => {
        const { cart, createOrder, isAuthenticated, emptyCart, navigate } =
            this.props;

        if (!isAuthenticated) {
            // redirect the user to login page
            alert('Please login to place order');
            navigate('/login');
            return;
        }
        createOrder(cart);
        alert('Your order is placed');
        emptyCart();
        navigate('/order-history');
    };
    render() {
        const { cart, removeFromCart, emptyCart } = this.props;

        if (cart.length === 0) {
            return (
                <>
                    <h3 className='text-warning'>Your cart is empty!</h3>
                </>
            );
        }

        return (
            <>
                <h3>
                    Items in your cart{' '}
                    <button onClick={emptyCart} className='btn btn-link'>
                        (Empty cart)
                    </button>
                </h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>Item name</th>
                            <th className='text-center'>Unit price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'></th>
                            <th className='text-center'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((li, index) => (
                            <tr key={li.product.id} className='align-middle'>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={li.product.picture}
                                        alt={li.product.description}
                                        className='app-thumbnail'
                                    />
                                    {li.product.description}
                                </td>
                                <td className='text-center'>
                                    {li.product.unit_price}
                                </td>
                                <td className='text-center'>
                                    <AddToCartButton product={li.product} />
                                </td>
                                <td className='text-center'>
                                    <button
                                        onClick={() =>
                                            removeFromCart(li.product)
                                        }
                                        className='btn btn-link bi bi-trash text-danger'
                                    ></button>
                                </td>
                                <td className='text-center'>
                                    {li.product.unit_price * li.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button
                    onClick={this.handlePlaceOrder}
                    className='btn btn-primary'
                >
                    Place order
                </button>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    cart: store.cartReducerState.cart,
    isAuthenticated: store.authReducerState.isAuthenticated,
});
const mapDispatch = {
    removeFromCart,
    emptyCart,
    createOrder,
};
export default connect(mapState, mapDispatch)(withRouter(CartItems));
