import styled from 'styled-components';
import { shade } from 'polished';
import { fontFamily, color } from '../../styles/custom';
import { device } from '../../styles/device';

export const Container = styled.div`
  margin: 0 auto;
  width: fit-content;
  #top {
    h1 {
      font-family: ${fontFamily.primary};
      font-style: normal;
      font-weight: 400;
      font-size: 40px;

      text-align: center;

      width: fit-content;

      background: ${color.white};

      z-index: 1;

      position: relative;
      top: 27px;
      left: 50px;
      @media ${device.mobileL} {
        font-size: 24px;
        width: fit-content;
      }
    }
    ul {
      display: flex;
      /* justify-content:  */
      margin: 0;
      height: fit-content;
      position: relative;
      top: 18px;
      right: 28px;
      #trash {
        color: ${color.red};
      }
      li,
      button {
        padding: 4px;
        font-size: 18px;

        color: ${color.secondary};

        font-family: ${fontFamily.secondary};

        border: none;
        background: none;

        display: flex;
        align-items: center;

        margin-left: 5px;
        svg {
          margin-left: 5px;
        }
        transition: ease-out 0.03s;
        &:hover {
          color: ${shade(0.01, color.primary)};
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    h2 {
      font-family: ${fontFamily.primary};
      color: ${shade(0.6, '#0000')};

      font-size: 35px;
      margin: 25px;
    }
    ul {
      font-family: ${fontFamily.secondary};
      list-style: none;
      color: ${shade(0.6, '#0000')};

      margin: auto;
    }
  }

  #border {
    box-sizing: border-box;
    padding: 5px;
    background: ${color.white};
    position: relative;
    background-clip: padding-box;

    padding-right: 125px;

    width: 1048px;
    height: 161px;
    border-radius: 16px;
    border: solid 3px transparent;

    @media ${device.mobileL} {
      width: 420px;
      height: 85px;
    }
    /*  */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -3;
      margin: -5px;
      border-radius: inherit;
      background: linear-gradient(
        135deg,
        #ffba08 0%,
        #d00000 50.52%,
        #03071e 100%
      );
    }
  }

  #buttons {
    display: flex;
    justify-content: end;
    margin-right: 48px;
    button {
      display: flex;
      justify-content: space-around;

      padding: 0 24px;

      /* width: 208px; */
      height: 53px;
      border: none;
      border-radius: 16px;

      background-color: ${color.green};

      font-family: ${fontFamily.primary};
      font-weight: 500;
      font-size: 23px;
      line-height: 29px;
      color: ${color.white};

      text-align: center;
      align-items: center;

      position: relative;
      bottom: 25px;
      svg {
        font-size: 35px;
      }
      transition: ease-in 0.1s;
      &:hover {
        background-color: ${shade(0.2, color.green)};
      }
    }
  }
`;
