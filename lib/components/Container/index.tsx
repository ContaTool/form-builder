import React, { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { editMode } from '../../helpers';
import Add from '../Add';
import { useBaseItem } from '../../hooks/useBaseItem';

interface Props {
  size: number;
  children: Array<any>;
}

interface ContainerProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Container = (props: ContainerProps) => {
  const { handleClick, baseStyles } = useBaseItem(props);

  return (
    <div
      className={`${baseStyles} w-full grid gap-2`}
      style={{
        gridTemplateColumns: `repeat(${props.props.size}, minmax(0, 1fr))`,
      }}
      onClick={handleClick}
    >
      {props?.children}
      {props.isEditing && (
        <div className="pt-4 pb-4 flex flex-col justify-center min-h-14">
          <Add parent={props.id} id={uuidv4()} key={uuidv4()} position={10} />
        </div>
      )}
    </div>
  );
};

export default Container;
