import React from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';

const Title = (props: ItemProps) => {
  const { handleClick, baseStyles } = useBaseItem(props);

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-bold text-xl py-4 `}
    >
      {props?.label}
    </p>
  );
};

export default Title;
