const addedObject: DataFormElement = {
  type: 'add',
  props: {},
};

const addObjectsToChildren = (
  children: DataFormElement[]
): DataFormElement[] => {
  if (children.length === 0) return [addedObject];
  else if (children.length > 0) return [addedObject, ...children, addedObject];
  else return [];
};

export const addElementToForm = (
  form: DataFormElement[]
): DataFormElement[] => {
  return form.map((elemento) => {
    return {
      ...elemento,
      props: {
        ...elemento.props,
        ...(elemento.props?.children
          ? {
              children: addObjectsToChildren(
                addElementToForm(elemento.props?.children || [])
              ),
            }
          : {}),
        ...(elemento.props?.tabs
          ? { tabs: addElementToForm(elemento.props?.tabs || []) }
          : {}),
      },
    };
  });
};

export const replacePlaceholder = (
  array: Array<any>,
  identifier: string,
  replacer: any
): Array<any> => {
  const index = array.findIndex(
    (i) => i.props.for === identifier && i.type === 'placeholder'
  );

  const new_array = [...array];

  if (index > 0) {
    new_array[index] = replacer;
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
