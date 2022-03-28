import { shade } from 'polished';
import styled from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

export const Container = styled.div`
  width: 307px;
  height: 63px;

  /* margin-left: 150px; */
  /* margin-top: 55px; */

  border: 3px solid ${color.primary};
  box-sizing: border-box;
  border-radius: 8px;

  display: flex;

  color: ${shade(0.6, '#0000')};
  input {
    margin: auto;
    margin-left: 8px;
    /* margin-right: 8px; */
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 23px;

    width: 100%;

    border: none;
  }

  button {
    border: none;
    background: none;

    /* margin-left: -12px; */
    margin-right: 16px;
    svg {
      color: ${shade(0.6, '#0000')};

      margin: auto;
      /* margin-right: 8px; */

      font-size: 34px;
    }
  }
`;
