import styled from "styled-components/macro";

export default function Start({ startGame }) {
  return (
    <Wrapper>
      <Title>Quizzical</Title>
      <StartButton onClick={startGame}>Start quiz</StartButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

const Title = styled.h1`
  color: hsla(231, 42%, 28%, 1);
  text-align: center;
`;

const StartButton = styled.button`
  background-color: hsla(230, 34%, 46%, 1);
  color: hsla(220, 43%, 97%, 1);
  height: 52px;
  width: 240px;
  border-radius: 15px;
  border: none;
  font-size: 16px;
`;
