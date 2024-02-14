export const compareFormComponent = <T,>(
  prevProps: Readonly<NDataFormElement<T>>,
  nextProps: Readonly<NDataFormElement<T>>
): boolean => {
  // console.log(
  //   copyObjectExcludeProperties(prevProps, ['children']),
  //   copyObjectExcludeProperties(nextProps, ['children'])
  // );
  Object.keys(prevProps).forEach((key) => {
    if (typeof prevProps[key] === 'function') {
      console.error(
        `${prevProps.type} contains a function in its properties. This can lead to problems with re-rendering. Please check the ${key} parameter.`
      );
    }
  });

  return (
    JSON.stringify(copyObjectExcludeProperties(prevProps, ['children'])) ===
    JSON.stringify(copyObjectExcludeProperties(nextProps, ['children']))
  );
};

export function copyObjectExcludeProperties<T extends Record<string, any>>(
  obj: T,
  excludedProps: (keyof T)[]
): Partial<T> {
  const newObj: Partial<T> = {};
  for (const key in obj) {
    if (!excludedProps.includes(key as keyof T)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

export function findNodeById(obj, id) {
  // Verifica si el objeto actual tiene el id buscado
  if (obj.id === id) {
    return obj;
  }

  // Verifica si el objeto actual tiene la propiedad "props" y es un array
  if (obj.props && Array.isArray(obj.props.children)) {
    // Itera sobre los hijos y realiza una búsqueda recursiva
    for (let child of obj.props.children) {
      // Llama recursivamente a la función para cada hijo
      const found = findNodeById(child, id);
      // Si se encuentra el nodo, devuelve el resultado
      if (found) {
        return found;
      }
    }
  }

  // Si no se encuentra en el objeto actual ni en sus hijos, devuelve null
  return null;
}
