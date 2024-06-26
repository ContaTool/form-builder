import React, { createContext, useState } from 'react';
import { DragDropContextProvider } from './DragDropContextProvider';
import { useStore } from '../hooks/useStore';
import { findNodeById } from '../helpers';

interface FormContextProps {
  selectedItem: any;
  selectItem: () => {};
  disableRequired: boolean; // I'm not sure about this. could be another thing
  form: Array<any>;
}

const FormContext = createContext<FormContextProps | null>(null);

interface FormContextProvider {
  children: React.ReactNode;
  onDragEnd?: (e: any) => void;
  isEditing?: boolean;
  disableRequired: boolean;
}

const FormContextProvider = ({
  children,
  onDragEnd,
  isEditing,
  disableRequired,
}: FormContextProvider) => {
  const [item, setItem] = useState<{
    id: string;
    type: string;
    parent: { id: string; type: string };
  } | null>(null);
  const formData = useStore((state) => state.form);

  const selectItem = (item) => {
    if (item && isEditing) {
      console.log('node founded', findNodeById(formData[0], item?.item));
      setItem({ ...findNodeById(formData[0], item.item), parent: item.parent });
      return;
    }
    setItem(null);
  };

  const selectedItem = () => {
    return item;
  };

  const values = {
    selectItem,
    selectedItem,
    disableRequired,
    form: formData,
  };

  if (onDragEnd) {
    return (
      <FormContext.Provider value={values}>
        <DragDropContextProvider onDragEnd={onDragEnd}>
          {children}
        </DragDropContextProvider>
      </FormContext.Provider>
    );
  } else {
    return (
      <FormContext.Provider value={values}>{children}</FormContext.Provider>
    );
  }
};

export { FormContext, FormContextProvider };
