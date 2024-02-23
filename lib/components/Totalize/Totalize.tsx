import React, { useContext } from 'react';
import useItem from '../../hooks/useItem';

import Subtitle from '../SubTitle';
import { TotalizerContext } from '../../context/TotalizerContext';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}

interface CardProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Totalize = (props: CardProps) => {
  const totalizeCtx = useContext(TotalizerContext);

  // Hooks
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  return (
    <div
      onClick={handleClick}
      className={`
      ${baseStyles} my-4 w-full pt-2 pb-2 @container`}
    >
      <div className="grid">{props.children}</div>
      <div className="pt-2 flex flex-1 justify-end ">
        <Subtitle
          id={crypto.randomUUID()}
          type="subtitle"
          props={{
            label: `Total: ${totalizeCtx.total()}`,
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(Totalize);
