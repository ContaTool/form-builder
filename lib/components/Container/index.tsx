import React, { useEffect } from 'react';
import { editMode } from '../../helpers';
import Add from '../Add';
import { useBaseItem } from '../../hooks/useBaseItem';

interface Props {
  size: number;
}

interface ContainerProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Container = (props: ContainerProps) => {
  const { handleClick, baseStyles } = useBaseItem(props);

  return (
    <div
      className={`${baseStyles} py-4 w-full grid grid-cols-${props.props.size} gap-2`}
      onClick={handleClick}
    >
      {props?.children}
    </div>
  );
};

export default Container;
