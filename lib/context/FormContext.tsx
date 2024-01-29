import React, { createContext } from 'react';
import { DragDropContextProvider } from './DragDropContext';
import { ItemSelectedContextProvider } from './ItemSelectedContext';

export type FormContextProps = {};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd: (e: any) => void;
}

const FormContextProvider = ({ children, onDragEnd }: FormContextProvider) => {
  const values = {};

  return (
    <FormContext.Provider value={values}>
      <DragDropContextProvider onDragEnd={onDragEnd}>
        <ItemSelectedContextProvider>{children}</ItemSelectedContextProvider>
      </DragDropContextProvider>
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
