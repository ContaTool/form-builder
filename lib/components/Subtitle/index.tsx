import React, { useEffect } from 'react';
import useItem from '../../hooks/useItem';

import { Tooltip } from '../Tooltip';

interface TitleProps {
  label?: string;
  guide_text?: string;
}

const SubTitle = (props: NDataFormElement<TitleProps>) => {
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-bold text-sm  flex flex-row items-center `}
    >
      {props.props.label}
      {props.props.guide_text ? (
        <Tooltip text={props.props.guide_text} />
      ) : null}
    </p>
  );
};

export default React.memo(SubTitle);
