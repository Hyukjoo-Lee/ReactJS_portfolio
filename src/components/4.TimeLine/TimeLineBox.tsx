import styled from "styled-components";
import { media } from "../../theme";

const Container = styled.div<{ isEnd: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isEnd }) => (isEnd ? "flex-start" : "flex-end")};
  /* align-items: flex-start; */

  .about {
    font-size: 1em;
    padding: 1em 0;
    color: ${({ theme }) => theme.color.white};
  }

  .date {
    color: ${({ theme }) => theme.color.white};
    font-size: 0.7em;
    margin-left: 1em;

    ${media.medium_max} {
      font-size: 0.84em;
    }
  }
`;

const Title = styled.div`
  font-size: 1.3em;
  font-weight: 800;

  color: ${({ theme }) => theme.color.purple};
`;

const Country = styled.div`
  font-size: 1.1em;
  color: ${({ theme }) => theme.color.gray};
  padding: 0.8rem 0;

  ${media.medium_max} {
    font-size: 15px;
  }

  ${media.small_max} {
    font-size: 12px;
    padding: 0.5rem 0;
  }
`;

const TimeLineBox = ({ career, isEnd }: any) => {
  console.log("isEnd" + isEnd);
  return (
    <Container data-aos="flip-down" data-aos-delay={500} {...{ isEnd }}>
      {/* <Container {...{ isEnd }}> */}
      <Country>{career.country}</Country>
      <Title className="title">
        {career.title}
        <span className="date">{career.date}</span>
      </Title>
      <div className="about">{career.about}</div>
    </Container>
  );
};

export default TimeLineBox;
