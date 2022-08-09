import { FaRegUser, FaHome, FaOpencart } from "react-icons/fa";
import NavBar from "./NavBar";
import Modals from "./Modals";

const ShoppingCards = () => {

  return (
    <>
      <div className="container-fluid mx-auto" style={{ marginTop: "5px", width: "95%", height: "150px", borderRadius: "30px", backgroundColor: "#FC7307", display: "flex" }}>

        <div className="container">
          <a style={{ marginLeft: "10px", width: "150px", height: "150px", display: "flex" }} ><img src="./img/camping-world-22.svg" alt="logo" className="img-fluid "></img></a>
        </div>

        <ul style={{ display: "flow", flexFlow: "row nowrap", alignItems: "center" }} className="nav">

          <li className="nav-item">
            <a style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" ><FaHome size={30} /></a>
          </li>
          <li className="nav-item">
            <a style={{ fontSize: "20px", margin: "5px" }} className="btn btn-dark" ><FaRegUser size={30} /></a>
          </li>
          <Modals></Modals>

        </ul>
      </div>

      <NavBar/>

    </>
  );
};

export default ShoppingCards;
