import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
height: 88px;
position: sticky;
top:0;
z-index: 99;
background-color: blue;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Oswald"
font-size: 1.2rem;
color: orange;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const MenuItems = styled.li`
height: 100%;
padding: 1rem 1rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: "Oswald";
font-weight: 400;
&:hover{
    background-color: grey;
    border-bottom: 0.3rem solid yellow;
    transition: 0.7s ease-in;
}
`

export const MenuItemLink = styled.a`
text-decoration: none;
color: orange;
`