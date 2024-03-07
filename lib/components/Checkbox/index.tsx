import React, { useRef } from 'react';
import useItem from '../../hooks/useItem';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface CheckBoxProps {
  label: string;
  name: string;
  value: string;
  validations?: RegisterOptions;
}

const CheckBox = (props: NDataFormElement<CheckBoxProps>) => {
  const name = useRef<string>(
    props.detailed
      ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}`
      : props.props.name ?? '-'
  );

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  return (
    <div onClick={handleClick} className={`${baseStyles} py-2 `}>
      <label className="md:w-2/3 block text-gray-700 font-bold hover:cursor-pointer select-none">
        <input
          {...register(name.current, { ...props.props.validations })}
          className="mr-2 leading-tight"
          value={props.props.value}
          type="checkbox"
        />
        <span className="text-sm">{props.props.label}</span>
      </label>
      <p className="text-red-500 text-xs italic pt-2">
        {errors[name.current]?.message?.toString()}
      </p>
    </div>
  );
};

export default CheckBox;
