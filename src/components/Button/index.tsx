import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  width,
  height,
  fontSize,
  ...rest
}) => {
  return (
    <Container
      type="button"
      width={width}
      height={height}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
