import React, { useState } from 'react';

const ToolTipSquare = (props: { text: string; show: boolean }) => {
  return (
    <div
      style={{
        visibility: props.show ? 'visible' : 'hidden',
        top: 'calc(-100% - 4px)',
        left: '150%',
      }}
      className="bg-white text-black p-6 shadow-lg rounded-md w-80 text-justify absolute z-50"
    >
      <div
        className="w-0 h-0
            absolute
            left-[-12px]
            border-t-[10px] border-t-transparent
            border-r-[12px] border-r-white
            border-b-[10px] border-b-transparent"
      ></div>
      <p className="font-normal text-sm">{props.text}</p>
    </div>
  );
};

const InfoIcon = () => {
  return (
    <div
      className="border-2 border-gray-500 rounded-full
      justify-center align-middle items-center flex
    text-gray-500  ms-2 hover:cursor-pointer size-5 text-sm "
    >
      {'i'}
    </div>
  );
};

export const Tooltip = (props: { text: string }) => {
  const [show, hasToShow] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => hasToShow(true)}
      onMouseLeave={() => hasToShow(false)}
      className="relative"
    >
      <InfoIcon />
      <ToolTipSquare text={props.text} show={show} />
    </div>
  );
};
