import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
import styled from "styled-components";

const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: 1em;
  border-radius: 50%;
`;

const NavBar = () => {
  const logo = require("../assets/images/logo.jpg");

  return (
    <header>
      <Navbar className="fixed-top" bg="#000" expand="lg">
        <Container>
          <NavLink href="/">
            <Logo src={logo} alt="logo" />
          </NavLink>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
