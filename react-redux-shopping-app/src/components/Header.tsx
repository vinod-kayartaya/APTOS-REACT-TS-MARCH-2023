import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LineItem } from '../redux/datatypes';
import { RootStoreType } from '../redux/store';

interface HeaderProps {
    cart: LineItem[];
}

export class Header extends Component<HeaderProps> {
    render() {
        const { cart } = this.props;

        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10'>
                                <h3>
                                    <Link className='app-primary-link' to='/'>
                                        Shopping App
                                    </Link>
                                </h3>
                            </div>
                            <div className='col text-end'>
                                <h3>
                                    <Link
                                        className='app-primary-link'
                                        to='/cart-items'
                                    >
                                        <i className='bi bi-cart'></i>{' '}
                                        {cart && cart.length > 0 && (
                                            <span className='badge text-bg-secondary'>
                                                ({cart.length})
                                            </span>
                                        )}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>{JSON.stringify(cart)}</div>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    cart: store.cartReducerState.cart,
});

export default connect(mapState)(Header);
