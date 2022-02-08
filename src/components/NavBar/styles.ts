import styled from 'styled-components';
import { fontFamily, color } from '../../styles/custom';
import { device } from '../../styles/device';

export const Container = styled.nav`
  margin: 40px;

  display: flex;
  justify-content: space-between;

  font-family: ${fontFamily.primary};
  font-size: 24px;
  div {
    display: flex;

    width: 100%;

    img {
      margin-right: 5%;
      @media ${device.mobileS} {
        margin-right: 0px;
      }
    }

    ul {
      display: flex;
      align-items: center;
      li {
        padding: 0px 40px;
        list-style: none;
        @media ${device.tablet} {
          padding: 0px 20px;
        }
        @media ${device.mobileL} {
          padding: 0px 8px;
        }
      }
    }
  }

  button {
    display: flex;
    align-items: center;

    font-family: ${fontFamily.primary};
    font-size: 24px;

    background: none;
    border: none;
    svg {
      margin-left: 6px;
    }
    transition: 0.1s;
    &:hover {
      color: ${color.primary};
      border-bottom: 3px solid red;
    }
  }
  @media ${device.tablet} {
    margin: 20px;
    font-size: 16px;

    img {
      width: 145px;
      margin: 5px;
    }
    li {
      padding: 0px 20px;
    }

    button {
      font-size: 16px;

      svg {
        width: 24px;
      }
    }
  }
  @media ${device.mobileL} {
    margin: 10px;
    font-size: 10px;

    img {
      width: 75px;
      margin-right: 0px;
    }

    button {
      font-size: 10px;

      svg {
        width: 14px;
        margin-left: 2px;
      }
    }
  }
`;
