import { FaRegUser, FaHome } from "react-icons/fa";
import NavBar from "./NavBar";
import image1 from "../assets/img/camping-world-22.svg"
import { FaOpencart } from "react-icons/fa";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
      <div className="container-fluid mx-auto" style={{ marginTop: "5px", width: "95%", height: "150px", borderRadius: "30px", backgroundColor: "#FC7307", display: "flex" }}>

        <div className="container">
          <a style={{ marginLeft: "10px", width: "150px", height: "150px", display: "flex" }} ><img src={image1} alt="logo" className="img-fluid "></img></a>
        </div>

        <ul style={{ display: "flow", flexFlow: "row nowrap", alignItems: "center" }} className="nav">

          <li className="nav-item">
            <a style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" ><FaHome size={30} /></a>
          </li>
          <li className="nav-item">
            <a style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" ><FaRegUser size={30} /></a>
          </li>
          {/* <Modals/> */}
          <button onClick={openModal} style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" >
            <Badge badgeContent={data.cart.length} color="primary">
              <FaOpencart style={{ fontSize: "30px" }} />
            </Badge>
          </button>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <div className='d-flex justify-content-end'>
              <IconButton onClick={closeModal} className="bg-primary">
                <CloseIcon />
              </IconButton>
            </div>
            <CartContent />
          </Modal>
        </ul>
      </div>

      <NavBar />

    </>
  );
};

export default ShoppingCards;
