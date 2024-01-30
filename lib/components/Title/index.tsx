import React from 'react';
import { useItemSelected } from '../../hooks/useItemSelected';

const Title = (props: ItemProps) => {
  const { selectItem } = useItemSelected();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (props.isEditing) {
      selectItem(props);
    }
  };

  return (
    <p onClick={handleClick} className={`font-bold text-xl py-4 `}>
      {props?.label}
    </p>
  );
};

export default Title;
