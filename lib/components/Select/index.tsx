import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import useItem from '../../hooks/useItem';
import { Tooltip } from '../Tooltip';

interface SelectProps {
  name?: string;
  label?: string;
  validations?: RegisterOptions;
  guide_text?: string;
  option_values?: { value: string; label: string }[];
}

const Select = (props: NDataFormElement<SelectProps>) => {
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  const [name, _] = useState<string>(props.props.name || '-');

  // States
  const [query, setQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState(
    props.props.option_values?.filter((i) => i.value != 'add')
  );
  const [isOpen, setIsOpen] = useState(false);

  // Refs
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Contexts
  const {
    register,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext();

  // Effects
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    console.log('select', getValues(name));
    const defaultValue = getValues(name);
    if (getValues(name) !== '' && filteredOptions) {
      const d = filteredOptions.find((i) => i.value === defaultValue);
      setQuery(d?.label ?? '');
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    const filtered = props.props.option_values?.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleOptionSelect = (option: { value: string; label: string }) => {
    setQuery(option.label);
    setIsOpen(false);
    setValue(name, option.value);
    trigger(name);
  };

  return (
    <div
      onClick={handleClick}
      className={`${baseStyles} y-2 relative`}
      ref={wrapperRef}
    >
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        <div className="flex flex-row place-items-center h-5 ">
          {props.props.label}
          {props.props.guide_text ? (
            <Tooltip text={props.props.guide_text} />
          ) : null}
        </div>
      </label>
      <div>
        <input
          {...register(name, { ...props.props.validations })}
          type="text"
          className="w-full rounded py-3 px-4
          border-gray-500 border-2 border-solid
          focus:ring-transparent focus:border-pink-500"
          placeholder="Buscar..."
          value={query}
          autoComplete="off"
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <ul
            className="
            list-none p-0 hove1r:cursor-pointer absolute z-10 left-0 w-full mt-2 border rounded bg-white shadow-md"
          >
            {filteredOptions?.map((option, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-pink-200"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <p className="text-red-500 text-xs italic">
          {errors[name]?.message?.toString()}
        </p>
      </div>
    </div>
  );
};

export default Select;
