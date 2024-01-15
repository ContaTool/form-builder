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
