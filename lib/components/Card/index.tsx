import React, { useContext } from 'react';
import { FormContext } from '../../context/OldFormContext';
import type { TFormContext } from '../../context/OldFormContext';

const Card = (props: ElementProps) => {
  const { clickOnElement } = useContext<TFormContext>(FormContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // event.stopPropagation();
    // const element = props.element;
    // clickOnElement?.call(null, element);
  };

  return (
    <div
      onClick={handleClick}
      className="my-4 w-full rounded shadow-lg bg-white pt-2 pb-8 px-4 @container"
    >
      <div className="py-4 font-bold">
        <span className="text-xl">{props.label}</span>
      </div>

      <div className="grid">{props.children}</div>

      {/* <div className="grid grid-cols-2 @3xl:grid-cols-3 gap-x-2"> */}
      {/* </div> */}
    </div>
  );
};

export default Card;
