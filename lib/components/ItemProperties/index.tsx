import React, { useState, useContext, useEffect } from 'react';

import New from './New';
import { PropertyEditor } from './PropertyEditor';

import { useItemSelected } from '../../hooks/useItemSelected';

interface ItemPropertiesProps {}

const ItemProperties = () => {
  const { item, selectItem } = useItemSelected();
  const [hasToShow, setHasToShow] = useState<string>();

  useEffect(() => {
    console.log('element was clicked', item);
    if (item) {
      setHasToShow('properties');
      return;
    }
    console.log('setted to new');
    setHasToShow('new');
  }, [item]);

  return (
    <div>
      {hasToShow === 'new' ? <New></New> : null}
      {hasToShow === 'properties' ? <PropertyEditor type={item.type} /> : null}
      <button
        onClick={() => selectItem(null)}
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
