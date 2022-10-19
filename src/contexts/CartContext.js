import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useModal } from "../hooks/useModal";
import { ACTIONS, shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";

export const CartContext = createContext();

function CartContextProvider({ children }) {


    const [data, dispatch] = useLocalStorage('data', shoppingInitialState, shoppingReducer);

    const {closeModal} = useModal(false);

    const addToCart = (id) => {
        console.log(id);
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: id });
    };

    const delFromCart = (id, all = false) => {
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
        <CartContext.Provider value={{ data, addToCart, delFromCart, clearCart, closeModal }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;