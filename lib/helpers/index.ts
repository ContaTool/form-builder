import { v4 as uuidv4 } from 'uuid';

const addedObject: DataFormElement = {
  type: 'add',
  props: {},
};

const createAddObject = (): DataFormElement => {
  return {
    id: 'abc123',
    ...addedObject,
  };
};

const addObjectsToChildren = (
  children: DataFormElement[]
): DataFormElement[] => {
  if (children.length === 0) return [createAddObject()];
  else if (children.length > 0)
    return [createAddObject(), ...children, createAddObject()];
  else return [];
};

export const editMode = (form: DataFormElement[]): DataFormElement[] => {
  return form.map((elemento) => {
    return {
      ...elemento,
      props: {
        ...elemento.props,
        ...(elemento.props?.children
          ? {
              children: addObjectsToChildren(
                editMode(elemento.props?.children || [])
              ),
            }
          : {}),
        ...(elemento.props?.tabs
          ? { tabs: editMode(elemento.props?.tabs || []) }
          : {}),
      },
    };
  });
};

export const findInArrayAndReplace = (
  array: Array<any>,
  identifier: string,
  identifierKey: string,
  replacer: Array<any>
): Array<any> => {
  const index = array.findIndex((i) => i[identifierKey] === identifier);

  const new_array = [...array];

  if (index >= 0) {
    const new_forms = replacer;
    new_array.splice(index, 1, ...new_forms);
  }

  return new_array.map((i) => {
    if ('children' in i.props) {
      return {
        ...i,
        props: {
          ...i.props,
          children: [
            ...findInArrayAndReplace(
              i.props.children,
              identifier,
              identifierKey,
              replacer
            ),
          ],
        },
      };
    }
    return i;
  });
};

// TODO: Must be replaced by findInArrayAndReplace
export const replacePlaceholder = (
  array: Array<any>,
  identifier: string,
  replacer: string
): Array<any> => {
  const index = array.findIndex(
    (i) => i.props.for === identifier && i.type === 'placeholder'
  );

  const new_array = [...array];

  if (index > 0) {
    const new_forms = new_array[index].props.options[replacer];
    new_array.splice(index, 1, ...new_forms);
  }

  return new_array.map((i) => {
    if ('children' in i.props) {
      return {
        ...i,
        props: {
          ...i.props,
          children: [
            ...replacePlaceholder(i.props.children, identifier, replacer),
          ],
        },
      };
    }
    return i;
  });
};
