import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import type { TFormContext } from '../../context/FormContext';

// import {
//   UseFormRegisterReturn,
//   UseFormRegister,
//   useFormContext,
// } from 'reahook-form';

export default function Input(props: ElementProps) {
  const { clickOnElement } = useContext<TFormContext>(FormContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const element = props.element;
    clickOnElement?.call(null, element);
  };

  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();

  return (
    <div onClick={handleClick} className="py-2">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <div className="relative">
        <input
          // {...register(props.name)}
          // {...props}
          placeholder={props.placeholder}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <p className="text-red-500 text-xs italic pt-2">
        Error: Aqui va a un error que vas a mostrar
        {/* {errors[props.name]?.message?.toString()} */}
      </p>
    </div>
  );
}
