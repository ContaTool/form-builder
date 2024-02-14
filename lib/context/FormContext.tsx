import React, { createContext, useState } from 'react';
import { DragDropContextProvider } from './DragDropContextProvider';
import { useStore } from '../hooks/useStore';
import { findNodeById } from '../helpers';

const FormContext = createContext();

interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd: (e: any) => void;
}

const FormContextProvider = ({ children, onDragEnd }: FormContextProvider) => {
  const [item, setItem] = useState<{ id: string; type: string } | null>(null);
  const formData = useStore((state) => state.form);

  const selectItem = (item) => {
    console.log('current selected item', item, formData);
    console.log('node founded', findNodeById(formData[0], item?.item));
    setItem(findNodeById(formData[0], item.item));
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
