import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button, IconButton, } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import Modal from "./Modal";
import CartContent from './CartContent';
import { useModal } from '../hooks/useModal';
import CloseIcon from '@mui/icons-material/Close';
import useAxios from "../hooks/useAxios";

const Body = () => {

    const titleStyle = { textAlign: 'center', padding: '20px' }
    const { addToCart } = useContext(CartContext)

    // let { id, name, text, image, price } = data;
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const { data, isLoading, error } = useAxios('http://localhost:8000/cartInitialState')

    return (
        <>
            <h2 style={titleStyle}>Paquetes en Mendoza</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-0">
                {/* {data.products.map((product) =>
                            <ProductItem key={product.id} data={product} addToCart={addToCart} />
                            )} */}
                {isLoading ? <div>Cargando petición...</div> :
                    error.isError ? <div>Hubo un error: {error.message}</div> :
                        data.length === 0 ? null :
                            data.products.map((product, index) =>
                                <div className="col p-5">
                                    <div key={index} className="card" >
                                        <img src={require(`../assets/img/${product.image}`)} className="card-img-top" height="300px" alt="card_img" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.text}</p>
                                            <p className="card-text">USD {product.price}</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <Button className='btn btn-outline-secondary border-0' style={{ color: "#FC7307" }}
                                                onClick={() => { openModal(); addToCart(product.id) }} variant="text" startIcon={<ShoppingCartRounded />} type="button">
                                                Reservar
                                            </Button>
                                            <Modal isOpen={isOpenModal} closeModal={closeModal}>
                                                <div className='d-flex justify-content-end'>
                                                    <IconButton onClick={closeModal} className="bg-primary">
                                                        <CloseIcon />
                                                    </IconButton>
                                                </div>
                                                <CartContent />
                                            </Modal>
                                        </div>
                                    </div>
                                </div>)}
            </div>
        </>
    )
}

export default Body