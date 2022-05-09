import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
// import { Container } from './styles';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}
const TextAreaRef: React.FC<ITextAreaProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
    <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />

    // </Container>
  );
};

export default TextAreaRef;
