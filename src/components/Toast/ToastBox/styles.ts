import styled, { css } from 'styled-components';
import { color, fontFamily } from '../../../styles/custom';

interface IContainerProps {
  type?: 'sucesso' | 'erro' | 'info';
  temDescricao: number;
}
const toastTypesVariacoes = {
  info: css`
    background: ${color.secondary};
    color: #ffffff;
  `,
  sucesso: css`
    background: ${color.green};
    color: #ffffff;
  `,

  erro: css`
    background: ${color.red};
    color: #ffffff;
  `,
};
export const Container = styled.div<IContainerProps>`
  width: 304px;
  position: relative;
  padding: 16px 30px 16px 16px;
  margin: 12px 6px;
  border-radius: 8px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: inherit;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypesVariacoes[props.type || 'info']}

  > svg {
    margin-right: 12px;
  }
  div {
    flex: 1;
    font-family: ${fontFamily.primary};
    strong {
      font-size: 18px;
    }
    p {
      margin-top: 4px;
      font-size: 16px;
      opacity: 0.9;
      line-height: 20px;
    }
  }
  button {
    /* position: absolute; */

    opacity: 0.8;
    border: 0;
    background: transparent;
    color: #ffffff;
    transition: 0.15s;
    svg {
      font-size: 20px;
    }
    &:hover {
      opacity: 1;
    }
  }
  ${props =>
    !props.temDescricao &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
