import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export const useFormContext = () => {
  const ctx = useContext(FormContext);

  if (!ctx) {
    throw new Error('Form context needs FormContextProvider');
  }

  const handleComponentClick = (component) => {
    console.log('paso por el hook', component);
    ctx.click();
  };

  return {
    handleComponentClick,
  };
};
