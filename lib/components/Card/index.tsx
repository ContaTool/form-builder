import React, { useContext } from 'react';
import { useFormContext } from '../../hooks/useFormContext';

const Card = (props: ElementProps) => {
  const { handleComponentClick } = useFormContext();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handleComponentClick(props);
  };

  return (
    <div
      onClick={handleClick}
      className="my-4 w-full rounded shadow-lg bg-white pt-2 pb-2 px-4 @container"
    >
      <div className="grid">{props.children}</div>
    </div>
  );
};

export default Card;
