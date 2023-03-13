import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Product } from '../redux/datatypes';
import { fetchProducts } from '../redux/productActionCreators';
import { RootStoreType } from '../redux/store';
import ProductCard from './ProductCard';

interface ProductListProp {
    products: Array<Product>;
    fetchProducts: any;
}
interface ProductListState {}

export class ProductList extends Component<ProductListProp, ProductListState> {
    componentDidMount(): void {
        this.props.fetchProducts();
    }

    render() {
        const { products } = this.props;

        const productsJsx = products.map((p) => (
            <div className='col-4' key={p.id}>
                <ProductCard product={p} />
            </div>
        ));

        return <div className='row'>{productsJsx}</div>;
    }
}

const mapState = (store: RootStoreType) => ({
    products: store.productReducerState.products,
});

const mapDispatch = {
    fetchProducts,
};

export default connect(mapState, mapDispatch)(ProductList);
