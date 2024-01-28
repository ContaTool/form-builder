import React, { useEffect } from 'react';

export interface RootProps extends React.HTMLProps<HTMLElement> {
  size: number;
}

const Root = (props: RootProps) => {
  return (
    <div
      className={``}
      // style={{
      //   display: 'grid',
      //   gridTemplateColumns: `repeat(${props.size}, 1fr)`,
      // }}
    >
      {props?.children}
    </div>
  );
};

export default Root;
