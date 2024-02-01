import React, { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useBaseItem } from '../../hooks/useBaseItem';
import Reenderizer from '../Reenderizer';
import Container from '../Container';

interface ButtonProps {
  template: Array<NDataFormElement<any>>;
  name: string;
}

const Detailed = (props: NDataFormElement<ButtonProps>) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  const { handleClick, baseStyles } = useBaseItem(props);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'options', // Nombre del campo que representa el array
  });

  const addItem = () => {
    append({ option: '', value: '' });
  };

  const removeItem = (position: number) => {
    remove(position);
  };

  return (
    <div className={`${baseStyles} pb-4`}>
      <>
        {getValues('options') ? (
          <>
            {Array(getValues('options').length ?? 0)
              .fill(0)
              .map((_, index: number) => {
                return (
                  <>
                    <Container
                      key={String(index)}
                      type="container"
                      props={{ size: 3 }}
                    >
                      <>
                        <Reenderizer
                          detailed={{
                            name: 'options',
                            index,
                          }}
                          isEditing={false}
                          parent=""
                          data={props.props.template}
                        ></Reenderizer>
                        <button
                          onClick={() => removeItem(index)}
                          className="mt-4 h-12 flex-1 self-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                          type="button"
                        >
                          Eliminar
                        </button>
                      </>
                    </Container>
                  </>
                );
              })}
          </>
        ) : null}
      </>

      <div className="hover:cursor-pointer hover:underline" onClick={addItem}>
        Agregar un item
      </div>
    </div>
  );
};

export default Detailed;
