import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import { FaOpencart } from "react-icons/fa";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Modals = () => {

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { data, delFromCart, clearCart } = useContext(CartContext)
  const itemQuantity = data.cart.length
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = data.cart.reduce((a, b) => a + Number(b.price * b.quantity), 0);
    setTotal(newTotal)
  }, [data])


  return (
    <>
      <button onClick={openModal} style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" >
        <FaOpencart size={30} />
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="d-flex justify-content-between" >
          <h3>Tu compra</h3>
          <div>
            <IconButton data-bs-toggle="tooltip" title="Vaciar carrito" onClick={clearCart}>
              <CleaningServicesIcon />
            </IconButton>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <article className="p-3">
          {itemQuantity === 0  ?
            <p>Carrito vacío</p> :
            data.cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))
          }
        </article>
        <div className="d-flex justify-content-around">
          <p style={{ color: "black", fontSize: "25px" }}>Subtotal</p>
          <span style={{ color: "#FEAB6D", fontSize: "25px" }}>USD {total}</span>
        </div>
        <Button style={{ display: "block", marginRight: "auto", marginLeft: "auto", fontSize: "18px" }}>
          <ShoppingCartCheckoutIcon />Check Out <ShoppingCartCheckoutIcon />
        </Button>
      </Modal>
    </>
  );
};

export default Modals;
