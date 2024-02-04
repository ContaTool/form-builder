import React, { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { useBaseItem } from '../../hooks/useBaseItem';
import Reenderizer from '../Reenderizer';
import Container from '../Container';

interface DetailedProps {}

interface Props {
  children: Array<NDataFormElement<any>>;
  name: string;
}

interface DetailedProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Detailed = (props: DetailedProps) => {
  console.log('props of detailed', props.isEditing);

  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  const { handleClick, baseStyles } = useBaseItem(props);

  const { append, remove } = useFieldArray({
    control,
    name: props.props.name,
  });

  const addItem = () => {
    append({});
  };

  const removeItem = (position: number) => {
    remove(position);
  };

  return (
    <div onClick={handleClick} className={`${baseStyles} `}>
      <>
        {/* {props.isEditing && <div>Campo Detallado</div>} */}
        <div
          className={`${props.isEditing ? 'border border-dashed min-h-10 py-2 my-2 border-gray-800' : ''} `}
        >
          {Array(
            props.isEditing || !getValues(props.props.name)
              ? 1
              : getValues(props.props.name).length
          )
            .fill('')
            .map((_, index: number) => {
              return (
                <Container
                  key={String(index)}
                  type="container"
                  props={{ size: props.props.children.length + 1 }} //FIXME change to props.children + 1
                >
                  <>
                    <Reenderizer
                      detailed={{
                        name: props.props.name,
                        index,
                      }}
                      isEditing={props.isEditing || false}
                      parent=""
                      data={props.props.children}
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
              );
            })}
        </div>
      </>

      {!props.isEditing && (
        <div className="hover:cursor-pointer hover:underline" onClick={addItem}>
          Agregar un item
        </div>
      )}
    </div>
  );
};

export default Detailed;
