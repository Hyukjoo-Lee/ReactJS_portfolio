import { Navbar, Container, NavLink } from "react-bootstrap";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { theme } from "../theme";

const Nav = styled(motion.nav)`
  display: flex;
  position: fixed;
  width: 100%;
  height: min;
  top: 0;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 1em;
  border-radius: 50%;
  border: 2px solid black;
`;

const NavBar = () => {
  const logo = require("../assets/images/logo.jpg");

  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  const navVariants = {
    top: {
      backgroundColor: "black",
    },
    scroll: {
      backgroundColor: theme.color.lightpurple,
    },
  };

  // Scroll event
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);

  return (
    <header>
      <Navbar className="fixed-top" bg="#000" expand="lg">
        <Container>
          <NavLink href="/">
            <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
              <Logo src={logo} alt="logo" />
            </Nav>
          </NavLink>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
