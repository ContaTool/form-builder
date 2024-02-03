import React, { createContext, useState } from 'react';
import { DragDropContextProvider } from './DragDropContext';
import { ItemSelectedContextProvider } from './ItemSelectedContext';

export type FormContextProps = {
  activeTabs: number;
  setActiveTab: (activeTab: number) => void;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd: (e: any) => void;
}

const FormContextProvider = ({ children, onDragEnd }: FormContextProvider) => {
  const [activeTabs, setActiveTabs] = useState(0);

  const setActiveTab = (activeTab: number) => {
    setActiveTabs(activeTab);
  };

  const values = {
    activeTabs,
    setActiveTab,
  };

  return (
    <FormContext.Provider value={values}>
      <DragDropContextProvider onDragEnd={onDragEnd}>
        <ItemSelectedContextProvider>{children}</ItemSelectedContextProvider>
      </DragDropContextProvider>
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
