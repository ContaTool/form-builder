import React from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';
import { compareFormComponent } from '../../helpers';

type SubTitleProps = {
  size: number;
};

const SubTitle = (props: NDataFormElement<SubTitleProps>) => {
  const { handleClick, baseStyles } = useBaseItem(props);
  console.log('render subtitle');

  return (
    <div onClick={handleClick} className={`${baseStyles}`}>
      Soy el subtitulo {props.type}
    </div>
  );
};

export default React.memo(SubTitle, compareFormComponent);
