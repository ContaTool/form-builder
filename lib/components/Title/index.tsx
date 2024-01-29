import React from 'react';
import { useItemSelected } from '../../hooks/useItemSelected';

export interface TitleProps extends React.HTMLProps<HTMLElement> {
  label?: string;
  isEditing?: boolean;
  id: string;
}

const Title = (props: TitleProps) => {
  console.log('received props in title', props);
  const { selectItem } = useItemSelected();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('las props ', props);
    selectItem(props);
  };

  return (
    <p onClick={handleClick} className={`font-bold text-xl py-4 `}>
      {props?.label}
    </p>
  );
};

export default Title;
