import React from 'react';

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{ margin: '10px', padding: '10px', width: '200px' }}
    />
  );
};

export default Input;
