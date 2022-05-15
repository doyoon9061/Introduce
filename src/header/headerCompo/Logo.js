import React from "react";
import styled from "styled-components";

const Styled = {
  Wrap: styled.div`
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    font-family: "Times New Roman";
    color: #9e7f60;
  `
};
const Logo = () => {
  return <Styled.Wrap>doyoon`s</Styled.Wrap>;
};
export default Logo;
