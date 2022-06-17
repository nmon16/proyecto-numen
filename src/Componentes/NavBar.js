import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItems,
  MenuItemLink,
} from "./NavBars";
import { GiCampingTent } from "react-icons/gi";

const NavBar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <GiCampingTent size={"2em"} />
            DeCamping.com
          </IconLogo>
          <Menu>
            <MenuItems>
              <MenuItemLink>Home</MenuItemLink>
            </MenuItems>
            <MenuItems>
              <MenuItemLink>Servicios</MenuItemLink>
            </MenuItems>
            <MenuItems>
              <MenuItemLink>Paquetes</MenuItemLink>
            </MenuItems>
            <MenuItems>
              <MenuItemLink>Contactenos</MenuItemLink>
            </MenuItems>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
