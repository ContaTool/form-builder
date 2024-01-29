import React, { useState, useContext, useEffect } from 'react';
import Tabs from './Tabs';
import { FormContext } from '../../context/FormContext';
import { useItemSelected } from '../../hooks/useItemSelected';

interface ItemPropertiesProps {}

const ItemProperties = () => {
  const { item } = useItemSelected();
  const [hasToShow, setHasToShow] = useState<string>('new');

  useEffect(() => {
    console.log('element was clicked', item);
    if (item) {
      setHasToShow('properties');
    }
  }, [item]);

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
