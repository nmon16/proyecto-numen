import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useModal } from "../hooks/useModal";

const CartContent = () => {

    const { data, delFromCart, clearCart, closeModal } = useContext(CartContext)
    // const [closeModal] = useModal(false);


    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = data.cart.reduce((a, b) => a + Number(b.price * b.quantity), 0);
        setTotal(newTotal)
    }, [data])

    return (
        <>
            <div className="d-flex justify-content-center">
                <h3>Tu compra</h3>
                <div>
                    <IconButton data-bs-toggle="tooltip" title="Vaciar carrito" onClick={clearCart}>
                        <CleaningServicesIcon />
                    </IconButton>
                </div>
            </div>
            <article className="p-3">
                {
                    data.cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))
                }
            </article>
            <div className="d-flex justify-content-around">
                <p style={{ color: "black", fontSize: "25px" }}>Subtotal</p>
                <span style={{ color: "red", fontSize: "25px" }}>USD {total}</span>
            </div>
            <Button style={{ display: "block", marginRight: "auto", marginLeft: "auto", fontSize: "18px" }}>
                <ShoppingCartCheckoutIcon />Check Out <ShoppingCartCheckoutIcon />
            </Button>
        </>
    )
}

export default CartContent;
