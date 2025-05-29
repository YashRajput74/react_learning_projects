import Cart from "./Cart"
import CartProvider from "./CartContext"
import ProductList from "./ProductList"

export default function App() {
    return (
        <CartProvider>
            <div className="mainApp" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ProductList />
                <Cart />
            </div>
        </CartProvider>
    )
}