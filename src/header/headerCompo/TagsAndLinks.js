import React from "react";
import styled from "styled-components";

const Styled = {
  Wrap: styled.div`
    width: 560px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `
};

const TagsAndLinks = (props) => {
  // const [TxtColor, setTxtColor] = useState(0);
  const Text = styled.div`
    font-size: 20px;
    font-weight: 400;
    font-family: "Times New Roman";
    color: #9c7c5c;
    cursor: pointer;
    :hover {
      color: #ffc94c;
      transition-duration: 0.5s;
    }
  `;
  const ChoiceText = styled.div`
    font-size: 20px;
    font-weight: 400;
    font-family: "Times New Roman";
    color: #ffc94c;
    cursor: pointer;
  `;
  let LinkList = props.name;
  return (
    <Styled.Wrap>
      {LinkList.map((Link, idx) => {
        if (idx === 0) {
          return <ChoiceText>{Link}</ChoiceText>;
          //고칠 때 조건문 다시 걸어야 할듯
        } else if (idx >= 0) {
          return <Text>{Link}</Text>;
        }
      })}
    </Styled.Wrap>
  );
};
export default TagsAndLinks;
