import React from "react";
import { Text, View } from "react-native";
import styled from "./styled-components";

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <Container>
      <Header>Initialized Styled Components</Header>
    </Container>
  );
};

export default App;

const Container = styled(View)`
  flex: 1;
  background-color: tomato;
  justify-content: center;
  align-items: center;
`;

const Header = styled(Text)`
  color: yellowgreen;
  font-size: 24px;
  font-weight: 700;
`;
