import NavBar from "./NavBar";
import image1 from "../assets/img/Icons/camping_world_header.svg"
import { FaOpencart, FaRegUser } from "react-icons/fa";
import CartContent from "./CartContent";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ShoppingCards = () => {

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { data } = useContext(CartContext)


  return (
    <>
      <div className="container-fluid d-flex h-auto color1">

        <div className="container">
          <a className="navbar-brand" href="http://localhost:3000/">
            <img src={image1} alt="logo" width="200" height="175"></img>
          </a>
        </div>

        <ul  className="nav d-flex flex-nowrap align-items-center">

          <li className="nav-item ">
            <button disabled="disabled" title="Próximamente" className="btn btn-dark fs-5" >
              <FaRegUser size={30} />
            </button>
          </li>
          <button onClick={openModal} className="btn btn-dark ms-1 fs-5" >
            <Badge badgeContent={data.cart.length} color="primary">
              <FaOpencart size={30} />
            </Badge>
          </button>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <div className='d-flex justify-content-end'>
              <IconButton onClick={closeModal} className="bg-light">
                <CloseIcon />
              </IconButton>
            </div>
            <CartContent />
          </Modal>
        </ul>
      </div>

      <NavBar />

      <div className="p-5 text-bg-dark headerImg">
        <div className="container py-5 d-flex flex-wrap justify-content-between align-content-around">
          <h1 className="display-5 fw-bold text-wrap mx-auto">Los mejores campings para vivir un viaje increíble</h1>
        </div>
      </div>

    </>
  );
};

export default ShoppingCards;
