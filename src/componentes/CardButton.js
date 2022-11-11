import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button, IconButton } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import Modal from "./Modal";
import { useModal } from '../hooks/useModal';
import CloseIcon from '@mui/icons-material/Close';


const CardButton = ({data}) => {

    const { addToCart } = useContext(CartContext)
    const {id} = data
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
        <>
            <Button className='btn btn-outline-secondary border-0' style={{ color: "#FC7307" }}
                onClick={() => { openModal() }} variant="text" startIcon={<ShoppingCartRounded />} type="button">
                Reservar
            </Button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <div className='d-flex justify-content-end'>
                    <IconButton onClick={closeModal} className="bg-light">
                        <CloseIcon />
                    </IconButton>
                </div>
                <p className="fs-5">¿Quiere agregar este producto al carrito?</p>
                <div className="d-flex justify-content-around">
                    <Button onClick={() => { closeModal(); addToCart(id) }} variant="contained" color="success">Confirmar</Button>
                    <Button onClick={closeModal} variant="contained" color="error">Cancelar</Button>
                </div>

            </Modal>
        </>
    )
}

export default CardButton