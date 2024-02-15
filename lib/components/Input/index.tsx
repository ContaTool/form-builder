import React, { useRef } from 'react';
import type { RegisterOptions } from 'react-hook-form';

import useItem from '../../hooks/useItem';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: RegisterOptions;
}

const Input = (props: NDataFormElement<InputProps>) => {
  // const name = useRef(props.props.name ?? '');

  const name = useRef<string>(
    props.detailed
      ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}`
      : props.props.name ?? '-'
  );

  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${baseStyles} `} onClick={handleClick}>
      <div className="relative">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={name.current}
        >
          {props.props.label}
        </label>
        <input
          {...register(name.current, { ...props.props.validations })}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <p className="text-red-500 text-xs italic pt-2">
          {errors[name.current]?.message?.toString()}
        </p>
      </div>
    </div>
  );
};

export default Input;
