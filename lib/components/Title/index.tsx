import React, { useEffect } from 'react';
import useItem from '../../hooks/useItem';

import { Tooltip } from '../Tooltip';

interface TitleProps {
  label?: string;
  guide_text?: string;
}

const Title = (props: NDataFormElement<TitleProps>) => {
  // console.log('title', props);
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  return (
    <div
      onClick={handleClick}
      className={`${baseStyles} font-bold text-xl py-4 flex flex-row items-center `}
    >
      <p>{props.props.label}</p>
      {props.props.guide_text ? (
        <Tooltip text={props.props.guide_text} />
      ) : null}
    </div>
  );
};

export default React.memo(Title);
