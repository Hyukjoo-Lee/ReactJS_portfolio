import styled from "styled-components";
import { projects } from "../../data";
import { media } from "../../theme";
import { Progress, ProgressContainer } from "../1.Intro/IntroSlider";
import { Wrapper } from "../Wrapper";
import ProjectBox from "./ProjectBox";

export const Title = styled.div`
  color: ${({ theme }) => theme.color.purple};
  font-size: 3em;
  font-weight: 600;

  ${media.small_max} {
    font-size: 2.5em;
  }
`;

const ProjectsBoxes = styled.div`
  color: ${({ theme }) => theme.color.white};
  margin: 2em;
  margin-top: 10em;
  flex-direction: column;

  ${media.small_max} {
    font-size: 14px;
  }
`;

const ProjectPage = () => {
  return (
    <Wrapper>
      <ProgressContainer width={30} marginLeft={10}>
        <Title>Projects</Title>
        <Progress />
      </ProgressContainer>
      <ProjectsBoxes>
        {projects.map((project, index) => (
          <ProjectBox key={index.toString()} {...{ project, index }} />
        ))}
      </ProjectsBoxes>
    </Wrapper>
  );
};

export default ProjectPage;
