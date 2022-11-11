import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartContent = () => {

    const { data, delFromCart, clearCart } = useContext(CartContext)

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
                    { data.cart.length === 0 ? <p className="text-center fs-5">¡Tu carrito está vacío!</p> :
                        data.cart.map((item, index) => (<CartItem key={index} data={item} delFromCart={delFromCart} />))
                    }
            </article>
            <div className="d-flex justify-content-around">
                <p className="text-black fs-4">Subtotal</p>
                <span className="text-danger fs-4">USD {total}</span>
            </div>
                <Button className="d-block mx-auto fs-6">
                    <ShoppingCartCheckoutIcon />Check Out <ShoppingCartCheckoutIcon />
                </Button>
        </>
    )
}

export default CartContent;
