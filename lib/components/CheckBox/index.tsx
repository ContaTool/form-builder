import React from 'react';

const CheckBox = (props: ElementProps) => {
  return (
    <div className="py-2">
      <label className="md:w-2/3 block text-gray-700 font-bold hover:cursor-pointer select-none">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">{props.label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
