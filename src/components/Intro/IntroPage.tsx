import styled from "styled-components";
import { Wrapper } from "../Wrapper";
import IntroSlider from "./IntroSlider";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IntroPage = () => {
  return (
    <Wrapper>
      <InfoBox>
        <IntroSlider />
      </InfoBox>
    </Wrapper>
  );
};

export default IntroPage;
