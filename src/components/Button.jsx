import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>
      {text}
    </button>
  );
};

export default Button;
