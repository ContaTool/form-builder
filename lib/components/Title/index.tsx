import React from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';
import { Tooltip } from '../Tooltip';

interface TitleProps {
  label?: string;
  guide_text?: string;
}

const Title = (props: NDataFormElement<TitleProps>) => {
  const { handleClick, baseStyles } = useBaseItem(props);

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-bold text-xl py-4 flex flex-row items-center `}
    >
      {props.props.label}
      {props.props.guide_text && <Tooltip text={props.props.guide_text} />}
    </p>
  );
};

export default Title;
