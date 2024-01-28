import React from 'react';

import Form from '../Form';
import option from '../../forms/formOptions';
import newForm from '../../forms/new';
import formOptions from '../../forms/formOptions';

import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { FormDragDropContext } from '../../context/FormDragDropContext';

interface PropertyEditorProps {
  ctx: DataFormElement;
  onSubmit: (data) => {};
}

const PropertyEditor = ({ ctx, onSubmit }: PropertyEditorProps) => {
  // const type = option.options.find((i) => i.value === ctx?.type);
  // console.log('context ', ctx);
  // const handleSubmit = (data) => {
  //   // Create element from form
  //   const d = { ...data };
  //   delete d.type;
  //   onSubmit({
  //     id: ctx.id,
  //     type: data.type,
  //     props: {
  //       ...d,
  //     },
  //     position: ctx.position,
  //     parent: ctx.parent,
  //   });
  // };
  // return (
  //   <>
  //     {ctx?.type === 'add' ? (
  //       <Form isEditing={false} form={newForm} onSubmit={handleSubmit} />
  //     ) : null}
  //   </>
  // );

  return (
    <>
      <div className={``}>
        <Droppable droppableId="droppable1">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="droppable-area grid grid-cols-2 gap-2"
            >
              {formOptions.options.map((element, index) => {
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
                          h-16 rounded
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

export default PropertyEditor;
