import styled from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

export const Container = styled.div`
  #line-arctions {
    display: flex;
    flex-direction: row;

    align-items: center;
    margin: 55px auto auto 150px;
  }
`;
export const ButtonCreateGame = styled.button`
  width: 175px;
  height: 63px;

  margin-left: 385px;

  background: ${color.green};
  border: none;
  border-radius: 8px;

  color: ${color.white};

  font-family: ${fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;

  display: flex;
  align-items: center;

  justify-content: space-evenly;

  a {
    color: ${color.white};
  }
  svg {
    font-size: 30px;
  }
`;
