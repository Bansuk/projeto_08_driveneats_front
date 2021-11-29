import styled from 'styled-components';

const Header = styled.div`
  background-color: #cf2b2b;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  color: #fff;
  left: 0;
  padding: 8px 0 18px 21px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  & h1 {
    font-family: 'Righteous', cursive;
    font-size: 44px;
  }

  & span {
    font-size: 18px;
  }
`;

const Menu = styled.div`
  position: relative;
`;

const Footer = styled.div`
  align-items: center;
  background-color: #fff;
  bottom: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 92px;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100%;

  & button {
    background-color: #cbcbcb;
    border-radius: 50px;
    border: none;
    color: #fff;
    font-size: 20px;
    height: 61px;
    padding: 0 50px 0 50px;
    width: 88vw;
  }
`;

export { Header, Menu, Footer };
