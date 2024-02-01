import React from 'react';

interface ButtonProps {
  label: string;
}

const Button = (props: NDataFormElement<ButtonProps>) => {
  return (
    <button
      className="mt-4 h-12 flex-1 self-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
      type="submit"
    >
      {props.props.label}
    </button>
  );
};

export default Button;
