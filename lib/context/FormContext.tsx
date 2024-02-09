import React, { createContext, useEffect, useState } from 'react';
import { DragDropContextProvider } from './DragDropContext';
import { ItemSelectedContextProvider } from './ItemSelectedContext';

export type FormContextProps = {
  getActiveTab: (tabID: string) => number;
  setActiveTab: (activeTab: number, tab: string) => void;
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd: (e: any) => void;
}

type activeTabType = { [key: string]: number };

const FormContextProvider = ({ children, onDragEnd }: FormContextProvider) => {
  const [activeTabs, setActiveTabs] = useState<activeTabType>();

  const setActiveTab = (activeTab: number, tab: string) => {
    console.log(activeTab, tab);
    setActiveTabs((prev) => ({ ...prev, [tab]: activeTab }));
  };

  const getActiveTab = (tabID: string) => {
    return activeTabs?.[tabID] ?? 0;
    // return 0;
  };

  const values = {
    getActiveTab,
    setActiveTab,
  };

  useEffect(() => {
    console.log('active tabs', activeTabs);
  }, [activeTabs]);

  return (
    <FormContext.Provider value={values}>
      <DragDropContextProvider onDragEnd={onDragEnd}>
        <ItemSelectedContextProvider>{children}</ItemSelectedContextProvider>
      </DragDropContextProvider>
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
