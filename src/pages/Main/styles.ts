import styled from 'styled-components';
import { fontFamily, color } from '../../styles/custom';
import { device } from '../../styles/device';

export const Container = styled.div`
  img {
    position: relative;
    /* left: -35px; */
  }
  @media ${device.tablet} {
    width: 107%;
  }
`;

export const Central = styled.div`
  display: flex;

  margin-top: 75px;
  div {
    display: flex;
    flex-direction: column;
    margin: 40px;

    h1 {
      font-family: ${fontFamily.primary};
      font-size: 64px;
    }
    p {
      font-family: ${fontFamily.secondary};
      font-size: 25px;
      line-height: 28px;

      margin-bottom: 20px;
    }
    @media ${device.tablet} {
      margin: 25px 0px 0px 25px;
      h1 {
        font-size: 46px;
      }
      p {
        font-size: 16px;
      }
    }
    @media ${device.mobileL} {
      margin: 0px 15px 0px 15px;
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 12px;
        line-height: 16px;

        margin-bottom: 10px;
      }
    }
  }
  @media ${device.tablet} {
    margin-top: 35px;
  }
  @media ${device.mobileL} {
    margin-top: 25px;
  }
  align-items: center;

  img {
    width: 50%;
    @media ${device.tablet} {
      /* width: 40%; */
      height: 50%;
    }
    @media ${device.mobileL} {
      display: none;
    }
  }

  /* button {
    display: inline-block;
    width: 205px;
    height: 53px;
    font-family: ${fontFamily.primary};
    font-size: 32px;
    background-color: ${color.primary};
    border: none;
    border-radius: 4px;
    color: ${color.white};
    @media ${device.tablet} {
      font-size: 22px;
      width: 105px;
      height: 43px;
    }
    @media ${device.mobileL} {
      font-size: 16px;
      width: 64px;
    }
  } */
`;
