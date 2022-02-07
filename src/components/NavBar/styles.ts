import styled from 'styled-components';

export const Container = styled.nav`
  nav {
    font-family: Arial;
    font-weight: bold;
    font-size: 24px;
    background-color: #ffff;
    padding: 8px 48px;
    display: flex;
  }

  nav a {
    display: flex;
    padding: 18px 86px;
    text-decoration: none;
  }

  nav a:hover {
    font-weight: bold;
    color: black;
  }
`;
