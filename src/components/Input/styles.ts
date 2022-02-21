import styled from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

interface ContainerProps {
  //   isFocused: boolean;
  //   isFilled: boolean;
  //   isErrored: boolean;
  //   isFormGroup: boolean;
  width?: number;
  isHidden?: boolean;
  disabled?: boolean;
  activeColor?: string;
}

export const Container = styled.div<ContainerProps>`
  /* margin: 20px; */
  input {
    padding: 0px 14px;
    width: 571px;
    height: 63px;

    border: 3px solid ${color.primary};
    box-sizing: border-box;
    border-radius: 8px;

    font-size: 21px;
    line-height: 23px;
    font-family: ${fontFamily.secondary};

    color: rgba(0, 0, 0, 0.6);
  }
`;