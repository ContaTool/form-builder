import React from 'react';

const Button = (props: ElementProps) => {
  return (
    <div className="py-4">
      <button
        className="place-self-end inline-flex justify-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        type="submit"
      >
        Guardar
      </button>
    </div>
  );
};

export default Button;
