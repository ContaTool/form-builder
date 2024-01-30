import { useItemSelected } from './useItemSelected';

export const useBaseItem = (props: ItemProps) => {
  const { selectItem, item } = useItemSelected();
  const isSelected = item?.id === props.id;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (props.isEditing) {
      selectItem(props);
    }
  };

  const baseStyles = `
    ${isSelected && 'border border-solid border-blue-500 my-2'}`;

  return {
    handleClick,
    baseStyles,
  };
};
