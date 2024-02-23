import React, { useContext, useRef } from 'react';
import type { RegisterOptions } from 'react-hook-form';

import useItem from '../../hooks/useItem';
import { useFormContext } from 'react-hook-form';
import { TotalizerContext } from '../../context/TotalizerContext';
import { Tooltip } from '../Tooltip';

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: RegisterOptions;
  numeric: boolean;
  totalize: boolean;
}

const Input = (props: NDataFormElement<InputProps>) => {
  // const name = useRef(props.props.name ?? '');

  const detailCtx = useContext(TotalizerContext);

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

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (detailCtx && props.props.totalize) {
      detailCtx.handleInputChange({
        id: props.id,
        value: !isNaN(e.target.value)
          ? parseFloat(e.target.value.replace(/[.,]/g, ''))
          : 0,
      });
    }
  };

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
          <div className="flex flex-row place-items-center h-5 ">
            {props.props.label}
            {props.props.guide_text ? (
              <Tooltip text={props.props.guide_text} />
            ) : null}
          </div>
        </label>
        <input
          {...register(name.current, { ...props.props.validations })}
          onChange={_handleChange}
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
