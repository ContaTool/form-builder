import React, { useContext, useRef } from 'react';
import type { RegisterOptions } from 'react-hook-form';

import useItem from '../../hooks/useItem';
import { useFormContext } from 'react-hook-form';
import { TotalizerContext } from '../../context/TotalizerContext';
import { Tooltip } from '../Tooltip';
import { FormContext } from '../../context/FormContext';

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  validations?: RegisterOptions;
  numeric: boolean;
  totalize: boolean;
  format: 'numeric' | 'date' | 'financial' | 'text' | undefined;
}

const Input = (props: NDataFormElement<InputProps>) => {
  // const name = useRef(props.props.name ?? '');

  // Contexts
  const detailCtx = useContext(TotalizerContext);
  const formCtx = useContext(FormContext);

  const name = useRef<string>(
    props.detailed
      ? `${props.detailed.name}.${props.detailed.index}.${props.props.name}`
      : props.props.name ?? '-'
  );

  // console.log('disable required', formCtx.disableRequired);

  const getInputType = (type: string | undefined) => {
    if (type === 'numeric' || type === 'financial') {
      return 'number';
    }

    if (type === 'date') {
      return 'date';
    }

    return 'text';
  };

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
          {...register(name.current, {
            ...props.props.validations,
            required: !formCtx.disableRequired,
          })}
          onChange={_handleChange}
          type={getInputType(props.props.format)}
          className="w-full rounded py-3 px-4
          border-gray-500 border-2 border-solid
          focus:ring-transparent focus:border-pink-500"
        />

        <p className="text-red-500 text-xs italic">
          {errors[name.current]?.message?.toString()}
        </p>
      </div>
    </div>
  );
};

export default Input;
