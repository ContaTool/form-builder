import React, { createContext, useEffect, useState } from 'react';
import { isplice, numberWithCommas } from '../helpers';

const DetailedContext = createContext();

interface DetailedContextProvider {
  children: React.ReactNode;
}

const DetailedContextProvider = ({ children }: DetailedContextProvider) => {
  const [inputValues, setInputValues] = useState<Array<any>>([]);
  const [inputName, setinputName] = useState<string>('');

  const handleInputChange = (data) => {
    setInputValues((prev) => {
      return isplice([...prev], data.position, 1, data.value);
    });
  };

  const getTotal = () => {
    if (inputValues.length > 0) {
      const sum = inputValues.reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      if (isNaN(sum)) {
        return 0;
      }
      return numberWithCommas(sum);
    }
    return 0;
  };

  const setInputName = (name: string) => {
    setinputName(name.toLowerCase());
  };

  const values = {
    handleInputChange,
    total: getTotal,
    inputName,
    setInputName,
  };

  return (
    <DetailedContext.Provider value={values}>
      {children}
    </DetailedContext.Provider>
  );
};

export { DetailedContextProvider, DetailedContext };
