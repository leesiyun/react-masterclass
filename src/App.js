import styled from "styled-components";

const Title = styled.h1`
  color: tomato;
  &:hover {
    color: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    font-size: 99px;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <h1>Hello</h1>
    </Wrapper>
  );
};

export default App;
