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

export { Header };
