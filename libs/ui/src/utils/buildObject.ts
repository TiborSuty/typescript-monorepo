import {isFunction, isNil} from 'lodash';

export type BuildObject<T, B = Record<string, unknown>> = {
  [k in keyof T]-?: (arg: T[k], when?: unknown) => BuildObject<T, B & Record<k, T[k]>>;
} & {
  build: B extends T ? () => T : never;
};

/**
 * @description Custom builder for composing more complex, larger objects
 *
 * @example basic
 *
 * interface Task{
 *   id: string;
 *   name: string;
 * }
 *
 * buildObject<Task>().id('sad') // TS is OK, result is NOK!
 * buildObject<Task>().id('sad').build(); // TS2349: This expression is not callable. Type 'never' has no call signatures
 * buildObject<Task>().id('666').name('Builder').build(); // TS is OK, result is OK!
 *
 * @example with when condition
 *
 * interface Task{
 *   id: string;
 *   name?: string;
 * }
 *
 * buildObject<Task>().id('666').name('Builder', false).build();
 */
export function buildObject<T>(initial?: T): BuildObject<T> {
  const built: Record<string, unknown> = initial ?? {};

  const builder = new Proxy(
    {},
    {
      get(target, prop) {
        if ('build' === prop) return () => built;

        return (value: unknown, when?: unknown): unknown => {
          const bool = isNil(when) ? true : isFunction(when) ? !!when() : when;
          if (bool) built[prop.toString()] = value;
          return builder;
        };
      },
    }
  );

  return builder as BuildObject<T>;
}
