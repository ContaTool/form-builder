import React from 'react';

interface Props {}

interface RootProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Root = (props: RootProps) => {
  return <div className={``}>{props.children}</div>;
};

export default React.memo(Root);
