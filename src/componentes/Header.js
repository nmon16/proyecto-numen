import { FaOpencart, FaRegUser, FaHome, FaSearch } from "react-icons/fa";

const Header = () => {

    return (
        <>
            <div className="container-fluid mx-auto" style={{ marginTop: "5px", width: "95%", height: "150px", borderRadius: "30px", backgroundColor: "#FC7307", display: "flex" }}>

                <div className="container">
                    <a style={{marginLeft:"30px", width: "150px", height: "150px", display: "flex" }} href="javascript:void(0)"><img src="./img/camping-world-22.svg" alt="logo" className="img-fluid "></img></a>
                </div>

                <ul style={{ display: "flow", flexFlow: "row nowrap", alignItems: "center" }} className="nav">

                    <li className="nav-item">
                        <a style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark" href="javascript:void(0)"><FaHome size={30} /></a>
                    </li>
                    <li className="nav-item">
                        <a style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark" href="javascript:void(0)"><FaRegUser size={30} /></a>
                    </li>
                    <li className="nav-item">
                        <a style={{ fontSize: "20px", margin: "10px" }} className="btn btn-dark " href="javascript:void(0)"><FaOpencart size={30} /></a>
                    </li>
                </ul>

            </div>
        </>
    )

}

export default Header;