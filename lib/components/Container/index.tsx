import React, { useEffect } from 'react';
import { editMode } from '../../helpers';
import Add from '../Add';

export interface ContainerProps extends React.HTMLProps<HTMLElement> {
  size: number;
  editMode: boolean;
}

const Container = (props: ContainerProps) => {
  return (
    <div></div>
    // <div className={`py-4 w-full grid grid-cols-1 gap-4`}>
    //   {props?.children}
    //   {props.editMode ? <Add /> : null}
    // </div>
  );
};

export default Container;
