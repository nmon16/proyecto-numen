import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { useReducer } from "react";

import { FaOpencart } from "react-icons/fa";
// import { CartContext } from "../contexts/CartContext";
// import { useContext } from "react";
import { ACTIONS, shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import CartItem from "./CartItem";

const Modals = () => {

  const [isOpenModal, openModal, closeModal] = useModal(true);

  // const [cart, dispatch] = useContext(CartContext);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { cart } = state;

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
    <>
      <button onClick={openModal} style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark" ><FaOpencart size={30} /></button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Tu compra</h3>
        <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))
        }
      </article>
      </Modal>
    </>
  );
};

export default Modals;
