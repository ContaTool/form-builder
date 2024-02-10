import React, { useContext } from 'react';
import { useItemSelected } from '../../hooks/useItemSelected';
import { useBaseItem } from '../../hooks/useBaseItem';
import { compareFormComponent } from '../../helpers';

interface Props {}

interface CardProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Card = (props: CardProps) => {
  const { handleClick, baseStyles } = useBaseItem(props);

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

export default React.memo(Card, compareFormComponent);
