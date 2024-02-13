import React, { useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

import useItem from '../../hooks/useItem';
import { useFormContext } from 'react-hook-form';

const Input = () => {
  const { handleClick, baseStyles } = useItem({ name: 'input' });

  console.log('input container redered');

  const inputRef = useRef(uuidv4());

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${baseStyles} `} onClick={handleClick}>
      <div className="relative">
        <input
          {...register(`${inputRef.current}-name`)}
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
    </div>
  );
};

export default Input;
