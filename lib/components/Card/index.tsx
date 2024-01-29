import React, { useContext } from 'react';
import { useItemSelected } from '../../hooks/useItemSelected';

const Card = (props: ElementProps) => {
  const { selectItem } = useItemSelected();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    selectItem(props);
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
