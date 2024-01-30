import React from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';

interface TitleProps {
  label?: string;
}

const Title = (props: NDataFormElement<TitleProps>) => {
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
