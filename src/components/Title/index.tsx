import React from 'react';

export interface TitleProps {
  label: string;
}

const Title = (props: TitleProps) => {
  return <h1 className="text-3xl">{props.label}</h1>;
};

export default Title;
