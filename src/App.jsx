import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: #dd9d14;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello World</H1>
        <Button onClick={() => {}}>Check out</Button>
        <Input type="text" placeholder="The number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
