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
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // RemoveItemByID
  const removeItemById = () => {
    throw new Error('Function not implemented.');
  };

  // findItemByID
  const findDropableByID = (ID: string) => {
    return droppables.find((i) => i.id === ID);
  };

  // addItem
  const addDropable = (droppable: Droppable) => {
    setDroppables((prev) => [...prev, droppable]);
  };

  const onDragEnd: OnDragEndResponder = (e) => {
    setIsDragging(false);
    console.log('drag end?');
    const d = e.destination?.droppableId;
    if (d) {
      props.onDragEnd({ ...findDropableByID(d), type: e.draggableId });
    }
  };

  const onDradStart = () => {
    setIsDragging(true);
  };

  return {
    addDropable,
    onDragEnd,
    onDradStart,
    isDragging,
  };
};
