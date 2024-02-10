export const compareFormComponent = <T>(
  prevProps: Readonly<NDataFormElement<T>>,
  nextProps: Readonly<NDataFormElement<T>>
): boolean => {
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

function copyObjectExcludeProperties<T extends Record<string, any>>(
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
