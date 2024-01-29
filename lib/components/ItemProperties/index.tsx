import React, { useState, useContext, useEffect } from 'react';
import Tabs from './Tabs';
import { FormContext } from '../../context/FormContext';

interface ItemPropertiesProps {}

const ItemProperties = () => {
  // Listen for external click y muestra las propiedades

  const useFormContext = useContext(FormContext);

  if (!useFormContext) {
    throw new Error('Form context needs FormContextProvider');
  }

  const [hasToShow, setHasToShow] = useState<string>('new');

  // useEffect(() => {
  //   console.log('element was clicked', useFormContext.selectedElement);
  // }, [useFormContext.selectedElement]);

  return (
    <div>
      {hasToShow === 'new' ? <p>Nuevo elemento</p> : null}
      {hasToShow === 'properties' ? <p>Propiedades</p> : null}
      <button
        title="Contact Sale"
        className="fixed z-90 bottom-12 right-4
        w-16 h-16 rounded-full  drop-shadow-lg
        bg-pink-500 text-white font-bold"
      >
        +
      </button>
    </div>
  );
};

export default ItemProperties;
