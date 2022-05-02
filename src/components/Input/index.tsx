import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
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
const Input: React.FC<IInputProps> = ({ icon: Icon, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [defaultValue, fieldName, registerField]);
  return (
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {Icon && <Icon />}
    </Container>
  );
};

export default Input;
