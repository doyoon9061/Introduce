import styled from "styled-components";
import FstBodyImg from "../../images/main.png";

const Styled = {
  Wrap: styled.div`
    width: 100%;
    height: 830px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `,
  WrapImg: styled.img`
    width: 1200px;
    height: 100%;
  `
};
const Frbody = () => {
  const WrapImg = styled.img`
    width: 1200px;
    height: 100%;
  `;
  return (
    <Styled.Wrap>
      <WrapImg source={FstBodyImg} />
    </Styled.Wrap>
  );
};
export default Frbody;
