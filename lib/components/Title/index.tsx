import React from 'react';

export interface TitleProps extends React.HTMLProps<HTMLElement> {
  label?: string;
  box_size?: string;
}

const Title = (props: TitleProps) => {
  return (
    <p className={`${props?.box_size} font-bold text-xl py-4 `}>
      {props?.label}
    </p>
  );
};

export default Title;
