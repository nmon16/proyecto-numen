import { Button, IconButton, } from '@mui/material'
import { ShoppingCartRounded } from '@mui/icons-material'
import Modal from "./Modal";
import CartContent from './CartContent';
import { useModal } from '../hooks/useModal';
import CloseIcon from '@mui/icons-material/Close';

const ProductItem = ({ data, addToCart }) => {

  let { id, name, text, image, price } = data;
  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <>
      <div className="col p-5">
        <div className="card" >
          <img src={image} className="card-img-top" height="300px" alt="card_img" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">USD {price}</p>
          </div>
          <div className="card-footer text-center">
            <Button className='btn btn-outline-secondary border-0' style={{ color: "#FC7307" }}
              onClick={() => { openModal(); addToCart(id) }} variant="text" startIcon={<ShoppingCartRounded />} type="button">
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
      </div>
    </>
  );
}
export default ProductItem;


