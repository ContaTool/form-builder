import React, { useEffect, useRef, useState } from 'react';

const options = [
  { value: 'dev', label: '1055 - Developer' },
  { value: 'fox', label: '🦊 Developer' },
  { value: 'Butterfly', label: '🦋 Social Media' },
  { value: 'Honeybee', label: '🐝 Multímedia' },
];

const Select = (props) => {
  const [query, setQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    setQuery(option.label);
    setIsOpen(false);
  };

  return (
    <div className="py-2 relative " ref={wrapperRef}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <div>
        <input
          type="text"
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Buscar..."
          value={query}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <ul className="absolute z-10 left-0 w-full mt-2 border rounded bg-white shadow-md">
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-gray-200"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <p className="text-red-500 text-xs italic pt-2">
          Error: Aqui va a un error que vas a mostrar
          {/* {errors[props.name]?.message?.toString()} */}
        </p>
      </div>
    </div>
  );
};

export default Select;
