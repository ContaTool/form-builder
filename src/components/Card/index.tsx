import React from 'react';

export interface CardProps {
  label: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      {props.children}
    </div>
  );
};

export default Card;
