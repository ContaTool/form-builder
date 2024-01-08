const addedObject = {
  type: 'add',
  props: {},
};

const addObjectsToChildren = (children) => {
  if (children.length === 0) return [addedObject];
  if (children.length > 0) return [addedObject, ...children, addedObject];
};

export const addElementToForm = (form) => {
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
