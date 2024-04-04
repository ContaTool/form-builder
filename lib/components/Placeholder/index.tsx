import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import Reenderizer from '../Reenderizer';

interface Props {
  listen: string;
  options: Record<string, any>;
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

  useEffect(() => {
    // Force clean state before re-render
    setCurrentInput('');
    setTimeout(() => {
      setCurrentInput(controlInput);
    }, 1);
  }, [controlInput]);

  if (currentInput) {
    return (
      <Reenderizer
        data={[...(props.props.options[currentInput]?.children ?? [])]}
        isEditing={props.isEditing ?? false}
        parent={{ type: 'placeholder', id: props.id || '' }}
      ></Reenderizer>
    );
  }

  return null;
};

export default React.memo(PlaceHolder);
