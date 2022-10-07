import styled from "styled-components";
import { media } from "../../theme";
import { Progress, ProgressContainer } from "../1.Intro/IntroSlider";
import { Wrapper } from "../Wrapper";

export const Title = styled.div`
  color: ${({ theme }) => theme.color.purple};
  font-size: 3em;
  font-weight: 600;

  ${media.small_max} {
    font-size: 2.5em;
  }
`;

const ProjectPage = () => {
  return (
    <Wrapper>
      <ProgressContainer width={30} marginLeft={6}>
        <Title>Projects</Title>
        <Progress />
      </ProgressContainer>
    </Wrapper>
  );
};

export default ProjectPage;
