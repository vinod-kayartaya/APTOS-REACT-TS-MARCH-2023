import React, { Component } from 'react';
import { Product } from '../redux/datatypes';

interface ProductCardProps {
    product: Product;
}

interface ProductCardState {}

export class ProductCard extends Component<ProductCardProps, ProductCardState> {
    render() {
        const { product } = this.props;

        return (
            <>
                <div className='card'>
                    <img
                        src={product.picture}
                        className='card-img-top'
                        alt={product.description}
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{product.description}</h5>
                        <p className='card-text'>{product.quantity_per_unit}</p>
                        <button className='btn btn-primary'>Add to cart</button>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductCard;
