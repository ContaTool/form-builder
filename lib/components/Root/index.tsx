import React from 'react';

export interface RootProps extends React.HTMLProps<HTMLElement> {}

const Root = (props: RootProps) => {
  return <div className="grid grid-cols-3 gap-4">{props?.children}</div>;
};

export default Root;
