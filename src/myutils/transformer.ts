import { instanceToPlain } from 'class-transformer';
function trans(claz, obj, groups = []) {
  const inst = new claz();
  Object.assign(inst, obj);
  return instanceToPlain(inst, { excludeExtraneousValues: true, groups });
}
export function transArray(claz, objArray, groups = []) {
  if (Array.isArray(objArray)) {
    return objArray.map((obj) => trans(claz, obj, groups));
  } else {
    throw new Error('"transArray" accepts array only!');
  }
}
