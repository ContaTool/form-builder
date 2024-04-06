import React from 'react';

import { Draggable, Droppable } from '@hello-pangea/dnd';
import ItemList from '../ItemList';

interface NewItemProps {
  // ctx: DataFormElement;
  // onSubmit: (data) => {};
}

export const NewItem = (props: NewItemProps) => {
  return (
    <>
      <div className={''}>
        <Droppable droppableId="droppable1">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="droppable-area grid grid-cols-2 gap-2"
            >
              {ItemList.options.map((element, index) => {
                return (
                  <Draggable
                    key={element.value}
                    draggableId={element.value}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="
                          border  border-gray-300
                          relative select-none
                          py-6 rounded
                          flex justify-center items-center
                          hover:cursor-pointer"
                      >
                        <div className="rounded">{element.label}</div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default NewItem;
