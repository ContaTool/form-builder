import React, { useContext } from 'react';
import { FormContext, TFormContext } from '../../context/FormContext';

export default function Add(props: ElementProps) {
  const { clickOnElement } = useContext<TFormContext>(FormContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const element = props.element;
    console.log('elemetno', props, props.element);
    clickOnElement?.call(null, element);
  };

  return (
    <div
      onClick={handleClick}
      className="border border-dashed hover:text-zinc-900 text-zinc-500 rounded-md border-1 hover:border-black border-gray-400 hover:cursor-pointer flex justify-center items-center py-8"
    >
      <span className="text-sm font-bold ">AGREGAR ELEMENTO</span>
    </div>
  );
}
