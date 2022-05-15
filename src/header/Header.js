import React from "react";
import styled from "styled-components";
import Logo from "./headerCompo/Logo";
import TagsAndLinks from "./headerCompo/TagsAndLinks";
const Styled = {
  Wrap: styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #faf8ef;
  `
};
const Header = () => {
  const Links = ["Home", "Vison", "Plan", "Contact"];
  return (
    <Styled.Wrap>
      <Logo />
      <TagsAndLinks name={Links} />
    </Styled.Wrap>
  );
};
export default Header;
