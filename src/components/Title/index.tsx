import React from 'react';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <h1>{props.label}</h1>;
};

export default Button;
