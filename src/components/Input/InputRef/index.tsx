import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
// import { Container } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
const InputRef: React.FC<IInputProps> = ({ name, ...rest }) => {
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
    // <Container>
    <input ref={inputRef} defaultValue={defaultValue} {...rest} />

    // </Container>
  );
};

export default InputRef;
