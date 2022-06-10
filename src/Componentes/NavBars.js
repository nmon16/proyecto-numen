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