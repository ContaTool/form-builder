import { OnDragEndResponder } from '@hello-pangea/dnd';
import { useState } from 'react';

interface useDragDropProps {
  onDragEnd: (e: any) => void;
}

export type Droppable = {
  id: string;
  position: number;
  parent: string | undefined;
};

export const useDragDrop = (props: useDragDropProps) => {
  const [droppables, setDroppables] = useState<Droppable[]>([]);

  // RemoveItemByID
  // TODO: add this method

  // findItemByID
  const findDropableByID = (ID: string) => {
    return droppables.find((i) => i.id === ID);
  };

  // addItem
  const addDropable = (droppable: Droppable) => {
    setDroppables((prev) => [...prev, droppable]);
  };

  const onDragEnd: OnDragEndResponder = (e) => {
    console.log('drag end');
    const d = e.destination?.droppableId;
    if (!d) {
      return new Error('No destination id setted on drag item');
    }

    // props

    // onDragEnd({ ...findDropableByID(d), type: e.draggableId });
  };

  return {
    addDropable,
    onDragEnd,
  };
};
