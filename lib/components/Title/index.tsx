import React from 'react';
import { useItemSelected } from '../../hooks/useItemSelected';

export interface TitleProps extends React.HTMLProps<HTMLElement> {
  label?: string;
  box_size?: string;
}

const Title = (props: TitleProps) => {
  const { selectItem } = useItemSelected();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    selectItem(props);
  };

  return (
    <p
      onClick={handleClick}
      className={`${props?.box_size} font-bold text-xl py-4 `}
    >
      {props?.label}
    </p>
  );
};

export default Title;
