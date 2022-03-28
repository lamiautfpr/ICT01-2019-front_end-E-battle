import styled, { css } from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

interface ContainerProps {
  setFilter: boolean;
}

export const Container = styled.button`
  margin-left: 27px;
  width: 154px;
  height: 63px;
  background: ${color.primary};
  border-radius: 8px;

  border: none;

  color: ${color.white};

  display: flex;

  align-items: center;

  justify-content: center;

  /* padding: 0 auto; */

  p {
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 23px;
  }

  svg {
    font-size: 28px;
    margin-left: 8px;
  }
`;
export const ListItens = styled.div<ContainerProps>`
  ${props =>
    !props.setFilter &&
    css`
      display: none;
    `}

  position: absolute;
  z-index: 100;

  top: 390px;
  left: 483px;
  width: 568px;
  height: fit-content;

  background: ${color.white};
  box-shadow: -2px -2px 4px rgba(0, 0, 0, 0.25), 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  ul {
    list-style: none;
    margin-top: 20px;
    margin-left: 10px;

    div {
      margin: 8px;
      display: flex;

      width: 167px;
      height: 38px;

      font-family: ${fontFamily.secondary};
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 23px;

      color: ${color.secondary};

      &:hover {
        border: 3px solid ${color.primary};
        box-sizing: border-box;
        border-radius: 8px;
      }
      li {
        margin: auto;
        align-items: center;
        display: flex;
        justify-content: space-between;
        svg {
          font-size: 25px;
        }
      }
    }
  }
`;
