import React from 'react';

export interface TitleProps extends React.HTMLProps<HTMLElement> {
  label?: string;
}

const Title = (props: TitleProps) => {
  return (
    <span className={`${props?.className} text-lg py-4 `}>{props?.label}</span>
  );
};

export default Title;
