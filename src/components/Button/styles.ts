import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { color } from '../../styles/custom';
import { device } from '../../styles/device';

interface ContainerProps {
  width?: number;
  height?: number;
  fontSize?: number;
}

export const Container = styled.button<ContainerProps>`
  width: 205px;
  height: 53px;

  background: ${color.primary};
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  border: none;
  border-radius: 8px;

  font-family: Oxanium;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: ${color.white};
  transition: ease-in-out 0.2s;

  a {
    color: ${color.white};
  }

  &:hover {
    box-shadow: none;
    background-color: ${shade(0.1, color.primary)};
  }

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}

    ${props =>
    props.fontSize &&
    css`
      fontsize: ${props.fontSize}px;
    `}

    @media ${device.mobileL} {
    width: 300px;

    ${props =>
      props.width &&
      css`
        width: ${props.width - 271}px;
      `}

    font-size:24px;
  }
`;
