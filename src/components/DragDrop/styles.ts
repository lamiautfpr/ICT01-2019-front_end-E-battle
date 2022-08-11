import styled from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

export const Container = styled.div`
  margin-top: 9px;
  margin-bottom: 35px;
`;

export const DropContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 26px 13px 36px;

  width: 249px;
  height: 52px;

  background: ${color.green};
  border-radius: 8px;
  border: none;

  color: ${color.white};

  font-family: ${fontFamily.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 138%;

  svg {
    font-size: 20px;
  }
`;
