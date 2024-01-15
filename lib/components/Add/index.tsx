import React, { useContext } from 'react';
import { FormContext, TFormContext } from '../../context/FormContext';

export default function Add() {
  const { addNewElement } = useContext<TFormContext>(FormContext);

  return (
    <div
      onClick={addNewElement}
      className="border border-dashed hover:text-zinc-900 text-zinc-500 rounded-md border-1 hover:border-black border-gray-400 hover:cursor-pointer flex justify-center items-center py-8"
    >
      <span className="text-sm font-bold ">AGREGAR ELEMENTO</span>
    </div>
  );
}
