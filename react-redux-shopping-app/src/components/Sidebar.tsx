import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchBrands,
    fetchCategories,
    fetchProductsByBrand,
    fetchProductsByCategory,
} from '../redux/actions/productActionCreators';

import { logout } from '../redux/actions/authActionCreators';

import { RootStoreType } from '../redux/store';

interface SidebarProps {
    categories: string[];
    brands: Array<string>;
    fetchBrands: () => void;
    fetchCategories: () => void;
    fetchProductsByBrand: (brand: string) => void;
    fetchProductsByCategory: (category: string) => void;
    isAuthenticated: boolean;
    logout: () => void;
}

export class Sidebar extends Component<SidebarProps> {
    componentDidMount(): void {
        this.props.fetchBrands();
        this.props.fetchCategories();
    }

    render() {
        const { brands, categories } = this.props;
        const brandsJsx = brands.map((b) => (
            <Link
                to={'/products-by-brand/' + b}
                key={b}
                className='app-clickable list-group-item text-capitalize'
                onClick={() => this.props.fetchProductsByBrand(b)}
            >
                {b.toLowerCase()}
            </Link>
        ));
        const categoriesJsx = categories.map((c) => (
            <Link
                to={'/products-by-category/' + c}
                key={c}
                className='app-clickable list-group-item text-capitalize'
                onClick={() => this.props.fetchProductsByCategory(c)}
            >
                {c.toLowerCase()}
            </Link>
        ));

        return (
            <>
                <h5 className='mt-3 mb-3'>Shop by brands</h5>
                <ul className='list-group'>{brandsJsx}</ul>
                <h5 className='mt-3 mb-3'>Shop by categories</h5>
                <ul className='list-group'>{categoriesJsx}</ul>
                <h5 className='mt-3 mb-3'>Member area</h5>
                <ul className='list-group'>
                    {this.props.isAuthenticated || (
                        <>
                            <Link className='list-group-item' to='/login'>
                                Login
                            </Link>
                            <Link className='list-group-item' to='/register'>
                                Register
                            </Link>
                        </>
                    )}
                    {this.props.isAuthenticated && (
                        <>
                            <Link className='list-group-item' to='/dashboard'>
                                Dashboard
                            </Link>
                            <Link
                                className='list-group-item'
                                to='/order-history'
                            >
                                Order history
                            </Link>
                            <Link
                                className='list-group-item'
                                to='/login'
                                onClick={this.props.logout}
                            >
                                Logout
                            </Link>
                        </>
                    )}
                </ul>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    brands: store.productReducerState.brands,
    categories: store.productReducerState.categories,
    isAuthenticated: store.authReducerState.isAuthenticated,
});
const mapDispatch = {
    fetchBrands,
    fetchCategories,
    fetchProductsByBrand,
    fetchProductsByCategory,
    logout,
};
export default connect(mapState, mapDispatch)(Sidebar);
