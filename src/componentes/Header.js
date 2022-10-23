import NavBar from "./NavBar";
import image1 from "../assets/img/camping-world-22.svg"
import { FaOpencart, FaRegUser } from "react-icons/fa";
import CartContent from "./CartContent";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import image from "../assets/img/img_ppal2.jpg"

const ShoppingCards = () => {

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { data } = useContext(CartContext)


  return (
    <>
      <div className="container-fluid mx-auto" style={{ height: "150px", backgroundColor: "#FC7307", display: "flex" }}>

        <div className="container">
          <a style={{ marginLeft: "10px", width: "150px", height: "150px", display: "flex" }} ><img src={image1} alt="logo" className="img-fluid "></img></a>
        </div>

        <ul style={{ display: "flow", flexFlow: "row nowrap", alignItems: "center" }} className="nav">

          <li className="nav-item">
              <button style={{ fontSize: "20px", margin: "5px" }} disabled="disabled" title="Próximamente" className="btn btn-dark" >
                <FaRegUser size={30} />
              </button>
          </li>
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

      <div className="p-5 text-bg-dark" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", height: "500px" }}>
        <div className="container py-5 d-flex flex-wrap justify-content-between align-content-around">
          <h1 className="display-5 fw-bold text-wrap mx-auto">Los mejores campings para vivir un viaje increíble</h1>
        </div>
      </div>
      
    </>
  );
};

export default ShoppingCards;
