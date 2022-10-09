import styled from "styled-components";

const Header = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
`;

const Footer = styled.div`
  height: 25vh;
  background-color: transparent;
`;

/**
 * stroke-dasharray: totallength of the svg path
 * stroke-dashoffset: 0 - complete
 *                    totallength - start point
 * ratio, at point where scroll down from the top = window scrollY
 * + window.innerHeight
 * - div.offsetTop % div.offsetHeight
 *
 * when scroll is at the end
 *  window.scrollY + window.innerHeight
 *  - div.offsetTop
 *  / div.offsetHeight
 *
 * length - (length * ratio)
 */

const TimeLinePage = () => {
  return (
    <>
      <Header></Header>
      <Footer />
    </>
  );
};

export default TimeLinePage;
