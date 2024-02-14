import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

type useItemProps = {
  item: string;
  type: string;
  parent: any;
};

const useItem = (props: useItemProps) => {
  const ctx = useContext(FormContext);

  if (!ctx) {
    throw new Error('Cannot find Form context provider');
  }

  const handleClick = (event) => {
    event.stopPropagation();
    if (props.item) {
      console.log('clicked', props);
      ctx.selectItem(props);
    }
  };

  return {
    handleClick,
    item: ctx.selectedItem(),
    baseStyles: `${ctx.selectedItem()?.id === props.item ? 'border border-solid border-blue-500 my-2' : ''}`,
  };
};

export default useItem;
