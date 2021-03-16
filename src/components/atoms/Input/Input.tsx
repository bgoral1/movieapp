import React from 'react';
import { StyledInput } from '../../atoms/Input/Input.styles';

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ placeholder, value, onChange }) => (
  <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input;
