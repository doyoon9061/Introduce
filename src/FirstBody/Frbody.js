import styled from "styled-components";
// import FstBodyImg from "";

const FstBodyImg = {
  uri:
    "https://www.google.com/search?tbs=simg:CAQShQIJ-nTwr6EVwy8a-QELELCMpwgaOgo4CAQSFKMRxA--OYIz-xzWILgkigvML9MmGhq_1VysP3KlZBkM_13pD2PlMjTObcjPslpAc6iyAFMAQMCxCOrv4IGgoKCAgBEgSPfYFGDAsQne3BCRqZAQobCgh2ZXJ0aWNhbNqliPYDCwoJL2EvNGhoM3AwCh0KCmhvcml6b250YWzapYj2AwsKCS9hLzJtcXZ6YwodCgpkZWNvcmF0aXZl2qWI9gMLCgkvYS8zZm4zZnkKGgoHYXJtcmVzdNqliPYDCwoJL20vMGZ5NmhwCiAKDGhvbWUgZmVuY2luZ9qliPYDDAoKL20vMGg4anYwNQw&sxsrf=ALiCzsY-8dzqW7fb9t3NNljSYmCEfcN4sg:1652587673005&q=%C5%82adne+strony+internetowe&tbm=isch&sa=X&ved=2ahUKEwjzuNbp0OD3AhUwIkQIHVxOBLgQwg4oAHoECAEQMg"
};
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
