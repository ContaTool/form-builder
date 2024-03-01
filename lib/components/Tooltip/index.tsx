import React, { useState } from 'react';

const ToolTipSquare = (props: { text: string; show: boolean }) => {
  return (
    <div
      style={{
        visibility: props.show ? 'visible' : 'hidden',
        top: 'calc(-100% - 4px)',
        left: '150%',
      }}
      className="bg-white text-black pl-4 pr-4 shadow-lg rounded-md w-80 absolute z-50"
    >
      <div
        style={{
          borderTop: '10px transparent',
        }}
        className="w-0 h-0
            absolute
            left-[-12px]
            border-t-[10px] border-t-transparent
            border-r-[12px] border-r-white
            border-b-[10px] border-b-transparent"
      ></div>
      <p className="font-normal text-[18px]">{props.text}</p>
    </div>
  );
};

const InfoIcon = () => {
  return (
    <div
      style={{
        border: '2px solid #ababab',
      }}
      className="
      ms-2 text-sm flex hover:cursor-pointer
      cursor: pointer size-6 rounded-full justify-center align-middle items-center"
    >
      <span className="text-[#ababab]">{'i'}</span>
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
