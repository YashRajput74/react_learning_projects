import { useCart } from "./CartContext";

const sampleProducts = [
    { id: 1, itemName: "Apple", qty: 1 },
    { id: 2, itemName: "Banana", qty: 1 },
    { id: 3, itemName: "Orange", qty: 1 },
];

export default function ProductList() {
    const { dispatch } = useCart();
    const addToCart = (product) => {
        dispatch({ type: 'addItem', ...product })
    };
    return (
        <div>
            <h2>Products</h2>
            {sampleProducts.map(product => (
                <div key={product.id} style={{ border: '1px solid gray', padding: '1rem', marginBottom: '1rem' }}>
                    <h4>{product.itemName}</h4>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}