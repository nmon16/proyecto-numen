import { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";
// import { useModal } from "../hooks/useModal";

function CartButton() {

    // const [isOpenModal, openModal, closeModal] = useModal(true);

    const { openModal } = useContext(CartContext)

    return (

        <>
            <button onClick={openModal} style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark" >
                <FaOpencart size={30} />
            </button>
        </>
    )
}

export default CartButton;