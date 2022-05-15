import "./styles.css";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./header/Header";
import Frbody from "./FirstBody/Frbody";
const Styled = {
  Wrap: styled.div`
    width: 1920px;
    height: auto;
    background-color: gold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  `
};

export default function App() {
  return (
    <Styled.Wrap>
      <GlobalStyle />
      <Header />
      <Frbody />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Styled.Wrap>
  );
}
