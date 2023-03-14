import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Product } from '../redux/datatypes';
import {
    fetchProducts,
    fetchProductsByBrand,
    fetchProductsByCategory,
} from '../redux/actions/productActionCreators';
import { RootStoreType } from '../redux/store';
import ProductCard from './ProductCard';
import { withRouter } from '../hoc/withRouter';
import { useLocation, useNavigate } from 'react-router-dom';

interface ProductListProp {
    products: Array<Product>;
    fetchProducts: () => void;
    fetchProductsByBrand: (brand: string) => void;
    fetchProductsByCategory: (category: string) => void;
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}
interface ProductListState {}

export class ProductList extends Component<ProductListProp, ProductListState> {
    componentDidMount(): void {
        const { brand, category } = this.props.params;

        if (brand) {
            this.props.fetchProductsByBrand(brand);
        } else if (category) {
            this.props.fetchProductsByCategory(category);
        } else {
            this.props.fetchProducts();
        }
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
    fetchProductsByBrand,
    fetchProductsByCategory,
};

export default connect(mapState, mapDispatch)(withRouter(ProductList));
