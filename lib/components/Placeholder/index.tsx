import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import useItem from '../../hooks/useItem';
import { PlaceholderEditor } from './editor';
import Reenderizer from '../Reenderizer';

export interface Props {
  children: Array<NDataFormElement<any>>;
}

interface PlaceHolderProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const PlaceHolder = (props: PlaceHolderProps) => {
  const [currentInput, setCurrentInput] = useState<string>('');

  // Hooks
  const { control } = useFormContext();
  const controlInput = useWatch({
    control: control,
    name: props.props.listen,
  });
  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

  useEffect(() => {
    // Force clean state before re-render
    setCurrentInput('');
    setTimeout(() => {
      setCurrentInput(controlInput);
    }, 1);
  }, [controlInput]);

  const prepare = (value) => {
    return isNaN(value) ? `"${value}"` : value;
  };

  const getTab = (props) => {
    const value = 'NO';
    return props.find((t) => {
      const conditional = `${prepare(value)} ${t.props.condicional} ${prepare(t.props.value)} `;
      // console.log('la condicional', conditional);
      if (eval(conditional)) {
        return t;
      }
    });
  };

  return (
    <div onClick={handleClick} className={`${baseStyles} py-2 flex`}>
      {props.isEditing ? (
        <>
          {/* Here i have to show some kind of tabs */}
          <PlaceholderEditor {...props.props} />
        </>
      ) : (
        <>
          {/* Validate which is the selection and show*/}
          <Reenderizer
            data={[...(getTab(props.props.children)?.props.children || [])]}
            isEditing={props.isEditing ?? false}
            parent={{ type: 'placeholder', id: props.id || '' }}
          ></Reenderizer>
        </>
      )}
    </div>
  );
};

export default React.memo(PlaceHolder);
