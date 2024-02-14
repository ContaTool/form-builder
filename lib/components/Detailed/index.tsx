import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import useItem from '../../hooks/useItem';

interface DetailedProps {}

interface Props {
  children: Array<NDataFormElement<any>>;
  name: string;
}

interface DetailedProps extends NDataFormElement<Props> {
  children: JSX.Element;
}

const Detailed = (props: DetailedProps) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  const { handleClick, baseStyles } = useItem({
    item: props.id,
    type: props.type,
    parent: props.parent,
  });

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
                <>
                  <div>
                    {props.children[0] && React.cloneElement(props.children[0])}
                    {props.children[1] &&
                      React.cloneElement(props.children[1], {
                        detailed: {
                          name: props.props.name,
                          index,
                        },
                      })}
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="mb-4 h-12 flex-1 self-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-sm font-medium text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                    type="button"
                  >
                    Eliminar
                  </button>
                </>
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
