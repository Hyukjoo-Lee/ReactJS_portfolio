import styled from "styled-components";
import { ManSVG } from "../../assets/images/ManSVG";
import { media } from "../../theme";
import TimeLinePath from "./TimeLinePath";

const Header = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;

  .path {
    fill: none;
    stroke: ${({ theme }) => theme.color.white};
    stroke-width: 2px;

    ${media.medium_max} {
      stroke: ${({ theme }) => theme.color.gray};
    }
  }
`;

const Footer = styled.div`
  height: 25vh;
  background-color: transparent;
`;

const TimeLinePage = () => {
  return (
    <>
      <Header>
        <ManSVG />
      </Header>
      <TimeLinePath />
      <Footer />
    </>
  );
};

export default TimeLinePage;
