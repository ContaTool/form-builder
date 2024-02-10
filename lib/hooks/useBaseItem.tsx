import { useItemSelected } from './useItemSelected';

// TODO: Cambiar ItemProps

// interface BaseItemProps extends Omit<NDataFormElement<any>, 'props'> {}
interface BaseItemProps extends NDataFormElement<any> {}

export const useBaseItem = (props: NDataFormElement<any>) => {
  const { selectItem, item } = useItemSelected();
  const isSelected = item?.id === props.id;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    console.log('clicked');
    if (props.isEditing) {
      if (props.id !== item?.id) {
        selectItem(props);
      }
    }
  };

  const baseStyles = `${isSelected && 'border border-solid border-blue-500 my-2'}`;

  return {
    handleClick,
    baseStyles,
  };
};
