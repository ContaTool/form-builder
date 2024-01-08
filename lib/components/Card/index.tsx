import React, { useEffect, useState } from 'react';

export interface CardProps {
  label: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="mb-4 w-full rounded shadow-lg bg-white pt-2 pb-8 px-4">
      <div className="py-4 font-bold">
        <span className={`text-xl`}>{props.label}</span>
      </div>
      <div className="grid grid-cols-3 gap-4">{props.children}</div>
    </div>
  );
};

export default Card;
