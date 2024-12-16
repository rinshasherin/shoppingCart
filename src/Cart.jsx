import React, { useContext } from 'react'
import { CartContext } from './ContextProvider';

function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart?.length === 0 ? (
                <p>The cart is empty.</p>
            ) : (
                <ul>
                    {cart?.map((item) => (
                        <li key={item.id} style={{ marginBottom: "10px" }}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button className='btn btn-danger' onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart