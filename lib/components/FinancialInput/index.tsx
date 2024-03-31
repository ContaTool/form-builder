import React, { useEffect, useState } from 'react';

const FinancialInput = () => {
  const [value, setValue] = useState<string>(0);

  useEffect(() => {
    'financial loaded';
  }, []);

  function formatDot(number: string) {
    return number
      .toString()
      .replace(/\./g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const formatValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(formatDot(e.target.value));
  };

  return (
    <div
      className="
        bg-white
        w-full rounded py-3 px-4
          border-gray-500 border-2 border-solid
          focus:ring-transparent focus:border-pink-500
        flex flex-row
        "
    >
      <p className="mt-[1px] mr-1">$</p>
      <input
        value={value}
        onChange={formatValue}
        className="w-full p-0 m-0 focus:ring-transparent focus:border-transparent border-transparent"
      />
    </div>
    // <input
    //   className="w-full rounded py-3 px-4
    //   border-gray-500 border-2 border-solid
    //   focus:ring-transparent focus:border-pink-500"
    // />
  );
};

export default FinancialInput;
