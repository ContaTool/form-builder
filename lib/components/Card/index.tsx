import React from 'react';

export interface CardProps {
  label: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="ct-mb-4 ct-w-full ct-rounded ct-overflow-hidden ct-shadow-lg ct-bg-white ct-pt-2 ct-pb-8 ct-px-4">
      <div className="ct-py-4 ct-font-bold">
        <span className={`ct-text-xl`}>{props.label}</span>
      </div>
      <div className="ct-grid ct-grid-cols-3 ct-gap-4">{props.children}</div>
    </div>
  );
};

export default Card;
