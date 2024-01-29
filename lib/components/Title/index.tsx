import React from 'react';
import { useFormContext } from '../../hooks/useFormContext';

export interface TitleProps extends React.HTMLProps<HTMLElement> {
  label?: string;
  box_size?: string;
}

const Title = (props: TitleProps) => {
  const { handleComponentClick } = useFormContext();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handleComponentClick(props);
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
