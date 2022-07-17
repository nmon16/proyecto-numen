import { createContext, useReducer } from "react";
import { ACTIONS, shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";

export const CartContext = createContext();

function CartContextProvider({ children }) {

    // const [items, dispatch] = useLocalStorage('items', [], shoppingReducer);

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const addToCart = (id) => {
        console.log(id);
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: id });
    };

    const delFromCart = (id, all = false) => {
        //console.log(id, all);
        if (all) {
            dispatch({ type: ACTIONS.REMOVE_ALL_FROM_CART, payload: id });
        } else {
            dispatch({ type: ACTIONS.REMOVE_ONE_FROM_CART, payload: id });
        }
    };

    const clearCart = () => {
        dispatch({ type: ACTIONS.CLEAR_CART });
    };

    return (
        <CartContext.Provider value={{ state, addToCart, delFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;