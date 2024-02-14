import React from 'react';
import useItem from '../../hooks/useItem';

interface CheckBoxProps {
  label: string;
}

const CheckBox = (props: NDataFormElement<CheckBoxProps>) => {
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  return (
    <div onClick={handleClick} className={`${baseStyles} py-2 `}>
      <label className="md:w-2/3 block text-gray-700 font-bold hover:cursor-pointer select-none">
        <input className="mr-2 leading-tight" type="checkbox" />
        <span className="text-sm">{props.props.label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
