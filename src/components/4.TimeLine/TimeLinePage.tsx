import styled from "styled-components";
import { ManSVG } from "../../assets/images/ManSVG";
import { media } from "../../theme";
import TimeLineContent from "./TimeLineContent";

import TimeLinePath from "./TimeLinePath";
import TimeLinePath2 from "./TimeLinePath2";

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

export const ContextContainer = styled.div<StyledContainerProps>`
  width: ${({ width }) => `${width}%`};

  height: 50vh;
  margin-left: ${({ marginLeft }) => `${marginLeft}%`};
  margin-top: 3em;
  position: absolute;

  ${media.medium_max} {
    height: 40vh;
    margin-top: 0em;
  }

  ${media.small_max} {
    height: 35vh;
  }

  ${media.smaller_max} {
    height: 20vh;
  }
`;

const Footer = styled.div`
  height: 25vh;
  background-color: transparent;
`;

interface StyledContainerProps {
  width?: number;
  marginLeft?: number;
}

const TimeLinePage = () => {
  return (
    <>
      <Header>
        <ContextContainer width={60} marginLeft={40}>
          <TimeLineContent
            country={"South Korea"}
            marginTop={10}
            isFirst={true}
          />
        </ContextContainer>
        <ManSVG />
      </Header>
      {/* Path_1 */}
      <TimeLinePath />
      <TimeLinePath2 />
      <Footer />
    </>
  );
};

export default TimeLinePage;
