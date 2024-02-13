import React, { useEffect } from 'react';
import useItem from '../../hooks/useItem';

// import { Tooltip } from '../Tooltip';

interface TitleProps {
  label?: string;
  guide_text?: string;
}

const Title = (props: NDataFormElement<TitleProps>) => {
  const { handleClick, baseStyles } = useItem({ name: 'title' });

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

export default React.memo(Title);
