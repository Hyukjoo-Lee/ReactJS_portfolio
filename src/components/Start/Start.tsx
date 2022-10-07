import styled from "styled-components";

const NameContainer = styled.div`
  height: 100vh;
  margin: 0 10%;
`;

const Text = styled.div`
  position: relative;
  width: 100%;
  font-weight: 700;
  top: 32vh;
  font-size: 8.5vw;

  .content {
    color: ${({ theme }) => theme.color.purple};
    -webkit-text-stroke: 0.02em ${({ theme }) => theme.color.white};
  }

  .second {
    position: absolute;
    left: auto;
    right: 0;
  }
`;
const Start = () => {
  return (
    <NameContainer>
      <Text>
        <div className="content">HYUKJOO LEE</div>
        <div className="content second">PORTFOLIO</div>
      </Text>
    </NameContainer>
  );
};

export default Start;