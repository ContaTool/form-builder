import React, { useEffect } from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';
import { Tooltip } from '../Tooltip';
import { compareFormComponent } from '../../helpers';

interface TitleProps {
  label?: string;
  guide_text?: string;
}

const Title = (props: NDataFormElement<TitleProps>) => {
  const { handleClick, baseStyles } = useBaseItem(props);

  console.log('title has been rendered');

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-bold text-xl py-4 flex flex-row items-center `}
    >
      {props.props.label}
    </p>
  );
};

export default React.memo(Title, compareFormComponent);
