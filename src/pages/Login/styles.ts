import styled from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  .input {
    margin: 25px 0;
  }

  p {
    font-family: ${fontFamily.primary};
    font-size: 27px;
    line-height: 34px;
  }
  a {
    display: flex;
    margin-top: 14px;

    font-family: ${fontFamily.secondary};
    font-size: 18px;
    line-height: 20px;

    color: ${color.secondary};
  }

  button {
    margin-top: 50px;
  }

  div.sdas {
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      position: relative;
      margin: 0;
      background: none;
      border: none;
      right: 50px;
      svg {
        /* display: none; */
        /* text-align: center; */
        font-size: 32px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
