import React from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';

interface Title {
  label?: string;
}

const Title = (props: NDataFormElement<Title>) => {
  const { handleClick, baseStyles } = useBaseItem(props);

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-bold text-xl py-4 `}
    >
      {props.props.label}
    </p>
  );
};

export default Title;
