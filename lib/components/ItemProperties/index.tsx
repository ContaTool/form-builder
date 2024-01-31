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

  const _beforeSubmit = (data: any) => {
    if (item) {
      const d = { id: item.id, ...data };

      if (Object.keys(d).includes('children')) {
        d.children = d.children.map((i: NDataFormElement<any>) => i.id);
      }

      // if (item.type == 'container') {
      //   d.size = 1;
      // }

      props.onSubmit(d);
      return;
    }
    throw new Error('Item is not setted before save');
  };

  return (
    <div>
      {item ? (
        <PropertyEditor item={item} onSubmit={(data) => _beforeSubmit(data)} />
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
