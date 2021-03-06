import { AnyComponent } from './promise-render';

let CURRENT: string | string[] = 'NULL';

export declare type CurrentAuthority = string | string[] | (() => string | string[]) | 'NULL';

const renderAuthorize = <T extends AnyComponent>(Authorized: T) => (
  currentAuthority?: CurrentAuthority,
) => {
  if (currentAuthority) {
    if (typeof currentAuthority === 'function') {
      CURRENT = currentAuthority();
    } else if (
      Object.prototype.toString.call(currentAuthority) === '[object String]' ||
      Array.isArray(currentAuthority)
    ) {
      CURRENT = currentAuthority;
    }
  } else {
    CURRENT = 'NULL';
  }
  return Authorized;
};

export { CURRENT };
export default <T extends AnyComponent>(Authorized: T) => renderAuthorize<T>(Authorized);

