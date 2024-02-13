import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const useItem = (props) => {
  const ctx = useContext(FormContext);

  if (!ctx) {
    throw new Error('Cannot find Form context provider');
  }

  const handleClick = (event) => {
    event.stopPropagation();
    console.log('clicked', props.name);
    ctx.selectItem(props.name);
  };

  return {
    handleClick,
    item: ctx.selectedItem(),
    baseStyles: `${ctx.selectedItem() === props.name ? 'border border-solid border-blue-500 my-2' : ''}`,
  };
};

export default useItem;
