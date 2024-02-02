import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Add from '../Add';

interface Props {}

interface RootProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Root = (props: RootProps) => {
  return <div className={``}>{props.children}</div>;
};

export default Root;
