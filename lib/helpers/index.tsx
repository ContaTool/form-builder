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

export function findNodeByTotalizable(node) {
  // Base case: If the current node is of type "input" and numeric property is true, return it
  if (node.type === 'input' && node.props && node.props.numeric === true) {
    return node;
  }

  // Recursive case: If the current node has children, search through its children
  if (node.props && node.props.children) {
    for (let i = 0; i < node.props.children.length; i++) {
      const result = findNodeByTotalizable(node.props.children[i]);
      if (result) {
        return result;
      }
    }
  }

  // If the current node is not what we're looking for and has no children, return null
  return null;
}

export function decodeElement(data: NDataFormElement<any>) {
  if (data) {
    if (
      (data.type === 'tabs' ||
        data.type === 'radio_buttons' ||
        data.type === 'placeholder') &&
      data.props.children
    ) {
      return {
        options: data.props.children.map((i: any) => ({
          // label: i.props.label,
          ...i.props,
        })),
      };
    }
    return data.props;
  }
}

export function isplice(arr, start, deleteCount, ...addItem) {
  const result = [];
  if (start > 0) {
    result.push(...arr.slice(0, start));
  }
  result.push(...addItem);
  const len = result.length - addItem.length;
  let count = deleteCount <= 0 ? len : len + deleteCount;
  if (arr[count]) {
    result.push(...arr.slice(count));
  }
  return result;
}

export function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
