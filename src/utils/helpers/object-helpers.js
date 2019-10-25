export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(u => {
    if (u[objPropName] === itemId) {
      return {...u, ...newObjProps};
    }
    return u;
  })
};

export const hasObjectInArrayByProperty = (items, objProp, objPropName) =>
  items.some(u => u[objPropName] === objProp);

export const compareArraysByInOutObj = (arr1, arr2, method = 'in') => {
  if (method === 'in') return arr1.filter(u => arr2.indexOf(u) >= 0);
  if (method === 'out') return arr1.filter(u => arr2.indexOf(u) < 0);
  return undefined;
};

export const getObjectsOfArrayByProperty = (items, objProp, objPropName, method = 'in') => {
  if (method === 'in') return items.filter(u => u[objPropName] === objProp);
  if (method === 'out') return items.filter(u => u[objPropName] !== objProp);
  return undefined;
};

export const deleteObjectsInArrayByProperty = (items, objProp, objPropName) =>
  items.filter(u => u[objPropName] !== objProp);

