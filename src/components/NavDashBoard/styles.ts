import styled, { css } from 'styled-components';
import { color, fontFamily } from '../../styles/custom';
import { device } from '../../styles/device';

interface ContainerProps {
  setPosition?: string;
}

export const Container = styled.nav<ContainerProps>`
  margin: 100px auto 0px;

  width: 605px;
  height: 58px;

  border: 1px solid ${color.secondary};
  border-radius: 8px;

  .movend {
    z-index: -1;
    position: absolute;
    /* display: none; */

    width: 210px;
    height: 58px;

    background: ${color.secondary};
    border-radius: 8px;
    @media ${device.mobileL} {
      width: 130px;
      height: 37px;
    }

    ${props =>
      props.setPosition === 'continue' &&
      css`
        left: 536px;
        width: 170px;
        @media ${device.tablet} {
          left: 292px;
        }
        @media ${device.mobileL} {
          left: 140px;
          width: 135px;
        }
      `}
    ${props =>
      props.setPosition === 'community' &&
      css`
        left: 762px;
        width: 225px;
        @media ${device.tablet} {
          left: 462px;
        }
        @media ${device.mobileL} {
          left: 275px;
          width: 140px;
        }
      `}
  }

  div.i {
    display: flex;
    justify-content: space-between;
    width: 605px;
    height: 58px;
    align-items: center;
    /* border: 1px solid red; */
    padding: 0px 35px;
    @media ${device.mobileL} {
      width: 405px;
      height: 38px;

      padding: 0 18px;
    }
  }

  a {
    font-family: ${fontFamily.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 34px;
    @media ${device.mobileL} {
      font-size: 18px;
    }
  }

  @media ${device.mobileL} {
    width: 405px;
    height: 38px;
  }

  ${props =>
    props.setPosition === 'myGame' &&
    css`
      a:nth-child(1) {
        color: ${color.white};
      }
    `}
  ${props =>
    props.setPosition === 'continue' &&
    css`
      a:nth-child(2) {
        color: ${color.white};
      }
    `}
    ${props =>
    props.setPosition === 'community' &&
    css`
      a:nth-child(3) {
        color: ${color.white};
      }
    `}
`;
