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
    // name: '347ae440-2bb3-4ae6-8e12-d8ec26bbb77a',
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

  console.log('controlInput', controlInput, props.props.listen);

  const getTab = (props) => {
    if (controlInput) {
      return props.find((t) => {
        const conditional = `${prepare(controlInput)} ${t.props.condicional} ${prepare(t.props.value)} `;
        if (eval(conditional)) {
          return t;
        }
      });
    }
  };

  return (
    <>
      {props.isEditing ? (
        <>
          {/* Here i have to show some kind of tabs */}
          <div onClick={handleClick} className={`${baseStyles} py-2 flex`}>
            <PlaceholderEditor {...props.props} />
          </div>
        </>
      ) : (
        <Reenderizer
          data={[...(getTab(props.props.children)?.props.children || [])]}
          isEditing={props.isEditing ?? false}
          parent={{ type: 'placeholder', id: props.id || '' }}
        />
      )}
    </>
  );
};

export default React.memo(PlaceHolder);
