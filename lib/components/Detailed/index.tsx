import React, { useState } from 'react';
import { useBaseItem } from '../../hooks/useBaseItem';
import Reenderizer from '../Reenderizer';
import { useFieldArray, useFormContext } from 'react-hook-form';

interface ButtonProps {
  form: Array<NDataFormElement<any>>;
  name: string;
}

// FIXME: This is not working.. fix root first.
const Detailed = (props: NDataFormElement<ButtonProps>) => {
  const { handleClick, baseStyles } = useBaseItem(props);
  const [option, setOptions] = useState([]);

  console.log('props form', props);

  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: props.props.name, // Nombre del campo que representa el array
  });

  const removeItem = (index: number) => {
    remove(index);
  };

  const addItem = () => {
    append({
      label: 'hola',
      value: 'hola',
    });
  };

  return (
    <div className={`${baseStyles}`}>
      {option.map((o) => (
        <div>{o.label} X</div>
      ))}

      <Reenderizer
        detailed={{
          index: 0,
        }}
        isEditing={false}
        parent="abc123"
        key="abc123123"
        data={props.props.form[0]}
      ></Reenderizer>
      <div onClick={addItem}>Agregar {props.props.name}</div>
    </div>
  );
};

export default Detailed;
