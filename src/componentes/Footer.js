import React from "react";
import "./Footer.css";
import image1 from '../assets/img/camping-world4.svg'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container p-4 pb-0" style={{backgroundColor:"#FC7307"}} >
                <form action="" className="offset-md-2">
                    
                    <div className="row">
                        <div className="col-auto mb-4 mb-md-0">
                            <p className="pt-2">
                                <strong>Suscríbase a nuestro boletín informativo</strong>
                            </p>
                        </div>

                        <div className="col-md-5 col-12 mb-4 mb-md-0">
                            <div className="form-outline mb-4">
                                <input type="email" id="form5Example25" className="form-control" placeholder="Dirección de mail"/>
                                <label className="form-label" for="form5Example25"></label>
                            </div>
                        </div>

                        <div className="col-auto mb-4 mb-md-0">
                            <button type="submit" className="btn mb-4" style={{backgroundColor:"#236AB9", color:"black"}}>
                                Suscríbete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="footer-container">
                <div className="item1" style={{ paddingRight: "5px" }}>
                    <img src={image1} height="20px"/>
                </div>

                <div className="item2">
                    <span style={{ paddingRight: "5px" }}>Copyright </span>
                    <CopyrightIcon/>{" "}
                    <span style={{ paddingLeft: "5px" }}>
                        {new Date().getFullYear()} Camping World. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://www.instagram.com/campingworld/"
                    target="_blank"
                    className="item3"
                >
                    < InstagramIcon />
                </a>
                <a
                    href="https://www.facebook.com/campingworld/"
                    target="_blank"
                    className="item4"
                >
                    <FacebookIcon />
                </a>
                <a
                    href="https://www.youtube.com/c/campingworld"
                    target="_blank"
                    className="item5"
                >
                    <YouTubeIcon />
                </a>

            </div>
        </footer>
    );
};

export default Footer;