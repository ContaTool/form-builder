import React, { useContext, useEffect, useState } from 'react';
import { FormContext, TFormContext } from '../../context/FormContext';

const Card = (props: ElementProps) => {
  const { clickOnElement } = useContext<TFormContext>(FormContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('Button clicked');
    const element = props.element;
    clickOnElement?.call(null, element);
  };

  return (
    <div
      onClick={handleClick}
      className="my-4 w-full rounded shadow-lg bg-white pt-2 pb-8 px-4"
    >
      <div className="py-4 font-bold">
        <span className={`text-xl`}>{props.label}</span>
      </div>
      <div className="grid grid-cols-3 gap-4">{props.children}</div>
    </div>
  );
};

export default Card;
