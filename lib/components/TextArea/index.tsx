import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface TextAreaProps {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: RegisterOptions;
}

export default function TextArea(props: NDataFormElement<TextAreaProps>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (props.isEditing) {
    }
  };

  if (!props.props.name)
    return (
      <p className="text-red-500 text-xs italic pt-2">
        Propiedades deben proveer un nombre (name)
      </p>
    );

  return (
    <div onClick={handleClick} className="py-2">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.props.name}
      >
        {props.props.label}
      </label>
      <div className="relative">
        <textarea
          {...register(props.props.name, { ...props.props.validations })}
          // {...props}
          placeholder={props.props.placeholder}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <p className="text-red-500 text-xs italic pt-2">
        {errors[props.props.name]?.message?.toString()}
      </p>
    </div>
  );
}
