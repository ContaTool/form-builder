import React, { useState, useContext, useEffect } from 'react';

import New from './New';
import { PropertyEditor } from './PropertyEditor';
import { useItemSelected } from '../../hooks/useItemSelected';

interface ItemPropertiesProps {
  onSubmit: (data: any) => void;
}

const ItemProperties = (props: ItemPropertiesProps) => {
  // Hooks
  const { item, selectItem } = useItemSelected();

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div>
      {item ? (
        <PropertyEditor
          item={item}
          onSubmit={(data) => props.onSubmit({ ...item, ...data })}
        />
      ) : (
        <New />
      )}
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
