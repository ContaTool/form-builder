import React, { useCallback, useMemo } from 'react';
import { useItemSelected } from './useItemSelected';

interface BaseItemProps extends NDataFormElement<any> {}

export const useBaseItem = (props: NDataFormElement<any>) => {
  console.log('hook re rendered', props.type);

  const { selectItem, item } = useItemSelected();
  const isSelected = item?.id === props.id;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      if (props.isEditing  && item?.id !== props.id) {
        console.log('clicked');
        selectItem(props);
        console.log('selected', props.id)
        console.log('current select', item)
      }
    },
    [props, selectItem]
  );

  const baseStyles = useMemo(() => {
    return isSelected ? 'border border-solid border-blue-500 my-2' : '';
  }, [isSelected]);

  return {
    handleClick,
    baseStyles,
  };
};
