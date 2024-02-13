import React, { useContext } from 'react';
import useItem from '../../hooks/useItem';

interface Props {}

interface CardProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Card = (props: CardProps) => {
  const { handleClick, baseStyles } = useItem({ name: 'card' });

  console.log('card has been rendered');

  return (
    <div
      onClick={handleClick}
      className={`
      ${baseStyles}
      my-4 w-full rounded shadow-lg bg-white pt-2 pb-2 px-4 @container`}
    >
      <div className="grid">{props.children}</div>
    </div>
  );
};

export default React.memo(Card);
