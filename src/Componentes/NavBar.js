import {NavbarContainer, NavbarWrapper, IconLogo} from './NavBars'
import {GiCampingTent} from "react-icons/gi";


const NavBar = () => {

    return (
        <>
        <NavbarContainer>
        <NavbarWrapper>
         <GiCampingTent/>
        <IconLogo>DeCamping.com</IconLogo>
        </NavbarWrapper>
        </NavbarContainer>
        </>

    );

};

export default NavBar;