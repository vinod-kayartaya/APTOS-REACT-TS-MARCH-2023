import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    fetchBrands,
    fetchCategories,
    fetchProductsByBrand,
    fetchProductsByCategory,
} from '../redux/productActionCreators';
import { RootStoreType } from '../redux/store';

interface SidebarProps {
    categories: string[];
    brands: Array<string>;
    fetchBrands: () => void;
    fetchCategories: () => void;
    fetchProductsByBrand: (brand: string) => void;
    fetchProductsByCategory: (category: string) => void;
}

export class Sidebar extends Component<SidebarProps> {
    componentDidMount(): void {
        this.props.fetchBrands();
        this.props.fetchCategories();
    }

    render() {
        const { brands, categories } = this.props;
        const brandsJsx = brands.map((b) => (
            <li
                key={b}
                className='app-clickable list-group-item text-capitalize'
                onClick={() => this.props.fetchProductsByBrand(b)}
            >
                {b.toLowerCase()}
            </li>
        ));
        const categoriesJsx = categories.map((c) => (
            <li
                key={c}
                className='app-clickable list-group-item text-capitalize'
                onClick={() => this.props.fetchProductsByCategory(c)}
            >
                {c.toLowerCase()}
            </li>
        ));

        return (
            <>
                <h3>Shop by brands</h3>
                <ul className='list-group'>{brandsJsx}</ul>
                <h3>Shop by categories</h3>
                <ul className='list-group'>{categoriesJsx}</ul>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    brands: store.productReducerState.brands,
    categories: store.productReducerState.categories,
});
const mapDispatch = {
    fetchBrands,
    fetchCategories,
    fetchProductsByBrand,
    fetchProductsByCategory,
};
export default connect(mapState, mapDispatch)(Sidebar);
