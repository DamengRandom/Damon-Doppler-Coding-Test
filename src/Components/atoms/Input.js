import React from 'react';
import styled from 'styled-components';

const VelocityInputWrapper = styled.input`
  outline: none;
  width: 80px;
`;

export default function Input({
  labelText,
  id,
  type,
  placeholder,
  value,
  handleChange,
  handlePress
}) {
  return (
    <div className="velocity-input">
      <label>{labelText}{' '}</label>
      <VelocityInputWrapper
        data-testid={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyPress={handlePress}
      />
    </div>
  )
};
