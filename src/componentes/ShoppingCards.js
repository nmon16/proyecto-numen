import { useReducer } from "react";
import { ACTIONS, shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { FaRegUser, FaHome, FaSearch } from "react-icons/fa";



import { FaOpencart } from "react-icons/fa";
import NavBar from "./NavBar";

const ShoppingCards = () => {

  const titleStyle = { textAlign: 'center', padding: '20px', }

  const [isOpenModal, openModal, closeModal] = useModal(true);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

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

      <NavBar></NavBar>

      <h2 style={titleStyle}>Excursiones</h2>

      <div className="box grid-responsive">
        {products.map((product) => (<ProductItem key={product.id} data={product} addToCart={addToCart} />))}
      </div>

    </>
  );
};

export default ShoppingCards;
