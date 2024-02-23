import React, { createContext, useEffect, useState } from 'react';
import { isplice, numberWithCommas } from '../helpers';

export type data = {
  id: string;
  value: string;
};

export type TotalizerContext = {
  handleInputChange: (data: data) => void;
  total: () => string | 0;
};

const TotalizerContext = createContext<TotalizerContext | undefined>(undefined);

interface TotalizerContextProvider {
  children: React.ReactNode;
}

const TotalizerContextProvider = ({ children }: TotalizerContextProvider) => {
  const [inputValues, setInputValues] = useState<Record<string, number>>({});

  const handleInputChange = (data: { id: string; value: string }) => {
    console.log('received data', data);
    setInputValues((prev) => ({
      ...prev,
      ...{ [data.id]: Number(data.value) },
    }));
  };

  const getTotal = () => {
    const values: Array<number> = Object.values(inputValues);
    console.log('values', values);
    if (values.length > 0) {
      const sum = values.reduce((acc, currentValue) => acc + currentValue, 0);
      if (isNaN(sum)) {
        return 0;
      }
      return numberWithCommas(sum);
    }
    return 0;
  };

  const values = {
    handleInputChange,
    total: getTotal,
  };

  return (
    <TotalizerContext.Provider value={values}>
      {children}
    </TotalizerContext.Provider>
  );
};

export { TotalizerContextProvider, TotalizerContext };
