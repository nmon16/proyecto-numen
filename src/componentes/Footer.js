import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className="color1 text-center text-black">
            <div className="container">
                <section className="mb-4">
                    <a
                        href="https://www.instagram.com/campingworld/"
                        target="_blank"
                        rel=" noopener noreferrer"
                        className="btn btn-outline-dark btn-floating m-2"
                    >
                        < InstagramIcon />
                    </a>
                    <a
                        href="https://www.facebook.com/campingworld/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-floating m-2"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href="https://www.youtube.com/c/campingworld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-floating m-2"
                    >
                        <YouTubeIcon />
                    </a>
                </section>

                <section >
                    <form>
                        <div className="row d-flex justify-content-center">
                            <div className="col-auto">
                                <p className="pt-2">
                                    <strong>Suscríbase a nuestro boletín informativo</strong>
                                </p>
                            </div>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="mail" className="form-control" placeholder="Dirección de mail" />
                                    <label className="form-label" for="mail"></label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-dark mb-4">
                                    Subscríbete
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <div className="pb-4">
                <span className="pe-2">Copyright </span>
                <CopyrightIcon />{" "}
                <span className="ps-2">
                    {new Date().getFullYear()} Camping World. All Rights
                    Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;