import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'addItem': {
            const existingItem = state.find(item => item.id === action.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } 
            else {
                return [...state, {
                    id: action.id,
                    itemName: action.itemName,
                    qty: action.qty
                }];
            }
        }
        case 'removeItem': {
            return state.map(item =>
                item.id === action.id
                    ? { ...item, qty: item.qty - 1 }
                    : item
            ).filter(item => item.qty > 0);
        }
        default:
            return state;
    }
}


const initialCart = [];