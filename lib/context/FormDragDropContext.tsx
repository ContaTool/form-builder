import React from 'react';
import { DragDropContext } from '@hello-pangea/dnd';

interface FromDragDropProps {
  children: React.ReactNode;
  onDragEnd: () => {};
}

export const FormDragDropContext = (props: FromDragDropProps) => {
  return (
    <DragDropContext
      onDragStart={() => console.log('start dragging')}
      onDragEnd={props.onDragEnd}
    >
      {props.children}
    </DragDropContext>
  );
};
