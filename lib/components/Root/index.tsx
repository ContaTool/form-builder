import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Add from '../Add';

interface Props {}

interface CardProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Root = (props: CardProps) => {
  return <div className={``}>{props.children}</div>;
};

export default Root;
