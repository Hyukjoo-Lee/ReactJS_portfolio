import styled from "styled-components";
import { media } from "../../theme";

const SlideContainer = styled.div`
  width: 100%;
  margin-top: 1em;
`;

const Slides = styled.div`
  width: 600%;
  overflow: hidden;
  display: flex;
  animation: slide 20s infinite;
`;

const Slide = styled.div`
  width: 100%;
  font-size: 3em;
  font-weight: 700;
  padding-left: 4%;
  color: ${({ theme }) => theme.color.purple};

  ${media.medium_max} {
    font-size: 2em;
  }
`;

export const ProgressContainer = styled.div<StyledModalProps>`
  position: relative;
  padding-left: 24%;
  height: 0.3em;
  width: 20%;
`;

export const Progress = styled.div`
  height: 0.2em;
  background: ${({ theme }) => theme.color.gradient};
  position: absolute;
  animation: progress 4s infinite;
`;

interface StyledModalProps {
  height?: number;
  width?: number;
  paddingLeft?: number;
}

const IntroSlider = () => (
  <SlideContainer>
    <Slides>
      <Slide>
        <span>Full-Stack</span>
      </Slide>
      <Slide>
        <span>Java</span>
      </Slide>
      <Slide>
        <span>React</span>
      </Slide>
      <Slide>
        <span>HTML / CSS</span>
      </Slide>
      <Slide>
        <span>Javascript</span>
      </Slide>
      <Slide>
        <span>Typescript</span>
      </Slide>
    </Slides>
    <ProgressContainer>
      <Progress />
    </ProgressContainer>
  </SlideContainer>
);

export default IntroSlider;
