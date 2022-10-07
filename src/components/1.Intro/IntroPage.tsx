import styled from "styled-components";
import { media } from "../../theme";
import { Wrapper } from "../Wrapper";
import IntroCard from "./IntroCard";
import IntroSlider from "./IntroSlider";

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 790px;
  white-space: pre-line;
  line-height: 230%;
  font-size: 1.1em;
  color: ${({ theme }) => theme.color.white};

  ${media.medium_max} {
    width: 470px;
  }

  ${media.smaller_max} {
    width: 300px;
    font-size: 1em;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.3em;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IntroPage = () => {
  return (
    <Wrapper>
      <InfoBox>
        <IntroSlider />
        <IntroCard />

        <TextBox>
          <div>
            A firm individual who constantly learns and develops the knowledge
            and skills needed to become a <Bold>Full stack developer</Bold>.
            {"\n"}
            <Bold>Recent graduate</Bold> with fundamental knowledge of
            <Bold> Software development</Bold>.{"\n"}Currently, I'm working on
            several<Bold> Projects</Bold> for being more familiar with
            programming after graduated.
          </div>
        </TextBox>
      </InfoBox>
    </Wrapper>
  );
};

export default IntroPage;
