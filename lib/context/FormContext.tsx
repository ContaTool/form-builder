import React, { createContext, useState } from 'react';
import {
  DragDropContextProvider,
  DragDropContextProvider,
} from './DragDropContextProvider';

const FormContext = createContext();

interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd: (e: any) => void;
}

const FormContextProvider = ({ children, onDragEnd }: FormContextProvider) => {
  const [item, setItem] = useState('Sin item ');

  const selectItem = (item) => {
    setItem(item);
  };

  const selectedItem = () => {
    return item;
  };

  const values = {
    selectItem,
    selectedItem,
  };

  return (
    <FormContext.Provider value={values}>
      <DragDropContextProvider onDragEnd={onDragEnd}>
        {children}
      </DragDropContextProvider>
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
