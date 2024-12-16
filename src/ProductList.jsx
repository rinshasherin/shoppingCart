import React, { useContext } from 'react'
import { CartContext } from './ContextProvider';

function ProductList() {
    const products = [
        { id: 1, name: "Apple", price: 1.0 },
        { id: 2, name: "Banana", price: 0.5 },
        { id: 3, name: "Cherry", price: 2.0 },
    ];

    const { cart, setCart } = useContext(CartContext);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <>

            <div>
                <h2>Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id} style={{ marginBottom: "10px" }}>
                            {product.name} - ${product.price.toFixed(2)}
                            <button className='btn btn-primary' onClick={() => addToCart(product)} style={{ marginLeft: "10px" }}>
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ProductList