import withAuth from '../hoc/withAuth';
import withLoading from '../hoc/withLoading';
import withUrl from '../hoc/withUrl';

type Product = {
    id: number;
    name: string;
    description: string;
    unitPrice: number;
    quantityPerUnit: string;
    category: string;
    image: string;
};

type ProductListProps = {
    products?: Array<Product>;
};

const ProductList = ({ products }: ProductListProps) => {
    console.log(products);
    const productsJsx = products?.map((p) => (
        <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.description}</td>
            <td>{p.category}</td>
            <td>{p.unitPrice}</td>
            <td>{p.quantityPerUnit}</td>
        </tr>
    ));

    return (
        <>
            <h3>Product list here</h3>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Unit price</th>
                        <th>Quantity per unit</th>
                    </tr>
                </thead>
                <tbody>{productsJsx}</tbody>
            </table>
        </>
    );
};

export default withAuth(
    withUrl({
        url: 'http://localhost:4000/products',
        prop: 'products',
    })(withLoading('products')(ProductList))
);
