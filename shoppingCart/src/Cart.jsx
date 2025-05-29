import { useCart } from "./CartContext";

export default function Cart() {
    const { cart, dispatch } = useCart();
    const removeFromCart = (id) => {
        dispatch({ type: 'removeItem', id });
    }
    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} style={{ border: '1px solid green', padding: '1rem', marginBottom: '1rem' }}>
                        <h4>{item.itemName} (Qty: {item.qty})</h4>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}