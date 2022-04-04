import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

const App = () => {
  return (
    <Father>
      <Box backgroundColor="teal" />
      <Circle backgroundColor="tomato" />
    </Father>
  );
};

export default App;
