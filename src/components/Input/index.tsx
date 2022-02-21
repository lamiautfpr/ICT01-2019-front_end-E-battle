import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  isFormGroup?: boolean;
  width?: number;
  isHidden?: boolean;
  activeColor?: string;
  isShowPassword?: boolean;
}
const Input: React.FC<IInputProps> = ({
  icon: Icon,

  ...rest
}) => {
  return (
    <Container>
      <input {...rest} />
      {Icon && <Icon />}
    </Container>
  );
};

export default Input;
