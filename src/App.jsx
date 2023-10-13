import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  );
}

export default App;

const Container = styled.main`
  min-height: calc(100vh - 250px);
  position: relative;
  top: 70px;

  display: block;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;
