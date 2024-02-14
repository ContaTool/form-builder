import React, { useEffect } from 'react';
import useItem from '../../hooks/useItem';

import { Tooltip } from '../Tooltip';

interface TitleProps {
  label?: string;
  guide_text?: string;
}

const Title = (props: NDataFormElement<TitleProps>) => {
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
  });

  return (
    <p
      onClick={handleClick}
      className={`${baseStyles} font-bold text-xl py-4 flex flex-row items-center `}
    >
      {props.props.label}
      <Tooltip text={props.props.guide_text ?? ''} />
    </p>
  );
};

export default React.memo(Title);
