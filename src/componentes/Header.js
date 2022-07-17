import { useContext, useReducer } from "react";
import { FaRegUser, FaHome, FaSearch, FaOpencart } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
import { useModal } from "../hooks/useModal";
import { ACTIONS, shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import Modal from "./Modal";


const Header = () => {

    // const { state } = useContext(CartContext);
    const [isOpenModal, openModal, closeModal] = useModal(true);


    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { cart } = state

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
            <div className="container-fluid mx-auto" style={{ marginTop: "5px", width: "95%", height: "150px", borderRadius: "30px", backgroundColor: "#FC7307", display: "flex" }}>

                <div className="container">
                    <a style={{ marginLeft: "30px", width: "150px", height: "150px", display: "flex" }} ><img src="./img/camping-world-22.svg" alt="logo" className="img-fluid "></img></a>
                </div>

                <ul style={{ display: "flow", flexFlow: "row nowrap", alignItems: "center" }} className="nav">

                    <li className="nav-item">
                        <a style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark" ><FaHome size={30} /></a>
                    </li>
                    <li className="nav-item">
                        <a style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark" ><FaRegUser size={30} /></a>
                    </li>
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
                </ul>


            </div>
        </>
    )
}

export default Header;