import React, { useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import useItem from '../../hooks/useItem';

interface TextAreaProps {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: RegisterOptions;
}

export default function TextArea(props: NDataFormElement<TextAreaProps>) {
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
  });

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [name, _] = useState<string>(
    props.detailed
      ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}`
      : props.props.name ?? '-'
  );

  return (
    <div onClick={handleClick} className="py-2">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {props.props.label}
      </label>
      <div className="relative">
        <textarea
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
