import { v4 as uuidv4 } from 'uuid';

const addedObject: DataFormElement = {
  type: 'add',
  props: {},
};

const createAddObject = (parent: string): DataFormElement => {
  return {
    id: uuidv4(),
    parent,
    ...addedObject,
  };
};

const addObjectsToChildren = (
  children: DataFormElement[],
  parent: string
): DataFormElement[] => {
  // if (children.length === 0) return [createAddObject(parent)];
  // else if (children.length > 0)
  //   return [createAddObject(parent), ...children, createAddObject(parent)];
  // else

  console.log('children call', children);

  return [createAddObject(parent), ...children, createAddObject(parent)];
};

export const editMode = (form: DataFormElement[]): DataFormElement[] => {
  const modifiedform = form
    .map((elemento) => {
      console.log('elemento');
      return [elemento];
    })
    .flat();

  return modifiedform;
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
    new_array.splice(index + 1, 0, ...new_forms);
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
