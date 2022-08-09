import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { FaOpencart } from "react-icons/fa";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Modals = () => {

  const [isOpenModal, openModal, closeModal] = useModal(true);
  const { data, delFromCart, clearCart } = useContext(CartContext)


  return (
    <>
      <button onClick={openModal} style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" ><FaOpencart size={30} /></button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Tu compra</h3>
        <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {
          data.cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))
        }
      </article>
      </Modal>
    </>
  );
};

export default Modals;
