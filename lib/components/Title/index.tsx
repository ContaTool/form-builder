import React from 'react';

export interface TitleProps {
  label: string;
  className?: string;
}

const Title = (props: TitleProps) => {
  return (
    <span className={`${props?.className} ct-text-lg ct-py-4 `}>
      {props.label}
    </span>
  );
};

export default Title;
