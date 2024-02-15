import React, { createContext, useEffect, useState } from 'react';
import { isplice } from '../helpers';

const DetailedContext = createContext();

interface DetailedContextProvider {
  children: React.ReactNode;
}

const DetailedContextProvider = ({ children }: DetailedContextProvider) => {
  // const [total, setTotal] = useState<number>(0);

  const [inputValues, setInputValues] = useState<Array<any>>([]);

  // Función para manejar el cambio de valor de los inputs
  const handleInputChange = (data) => {
    // const newValue = parseFloat(e.target.value);
    // setTotal((prevTotal) => prevTotal + newValue);

    setInputValues((prev) => {
      return isplice([...prev], data.position, 1, data.value);
    });
  };

  const getTotal = () => {
    if (inputValues.length > 0) {
      return inputValues.reduce((acc, currentValue) => acc + currentValue, 0);
    }
    return 0;
  };

  useEffect(() => {
    console.log('new input values', inputValues);
  }, [inputValues]);

  const values = { handleInputChange, total: getTotal };

  return (
    <DetailedContext.Provider value={values}>
      {children}
    </DetailedContext.Provider>
  );
};

export { DetailedContextProvider, DetailedContext };
