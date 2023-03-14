import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
} from '../redux/actions/cartActionCreators';
import { LineItem, Product } from '../redux/datatypes';
import { RootStoreType } from '../redux/store';

interface AddToCartButtonProps {
    product: Product;
    cart: LineItem[];
    addToCart: (product: Product) => void;
    increaseQuantity: (product: Product) => void;
    decreaseQuantity: (product: Product) => void;
}
export class AddToCartButton extends Component<AddToCartButtonProps> {
    render() {
        const { addToCart, product, cart, increaseQuantity, decreaseQuantity } =
            this.props;

        let jsx = (
            <button
                onClick={() => addToCart(product)}
                className='btn btn-primary'
            >
                Add to cart
            </button>
        );

        const li = cart.find((li) => li.product.id === product.id);
        if (li) {
            jsx = (
                <div className='row border border-primary app-add-to-cart-btn'>
                    <div className='col d-grid'>
                        <button
                            onClick={() => decreaseQuantity(product)}
                            className='btn btn-primary'
                        >
                            -
                        </button>
                    </div>
                    <div className='col align-middle text-center'>
                        {li.quantity}
                    </div>
                    <div className='col d-grid'>
                        <button
                            onClick={() => increaseQuantity(product)}
                            className='btn btn-primary'
                        >
                            +
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <>
                <div className='d-grid'>{jsx}</div>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    cart: store.cartReducerState.cart,
});
const mapDispatch = {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapState, mapDispatch)(AddToCartButton);
