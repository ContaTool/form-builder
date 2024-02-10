import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegisterOptions } from 'react-hook-form';
import { useBaseItem } from '../../hooks/useBaseItem';

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: RegisterOptions;
}

export default function Select(props: NDataFormElement<InputProps>) {
  const { handleClick, baseStyles } = useBaseItem(props);
  const [name, _] = useState<string>(
    props.detailed
      ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}`
      : props.props.name ?? '-'
  );

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${baseStyles} `} onClick={handleClick}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {props.props.label}
      </label>
      <div className="relative">
        <input
          {...register(name, { ...props.props.validations })}
          // {...props}

          placeholder={props.props.placeholder}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <p className="text-red-500 text-xs italic pt-2">
        {errors[name]?.message?.toString()}
      </p>
    </div>
  );
}
