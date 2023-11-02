import {call, complement, pipe, when} from 'ramda';
import {isFunction} from 'ramda-adjunct';

import {isFeatureEnabled} from './isFeatureEnabled';

type Element<T> = T;
type ElementGetter<T> = () => T;
type ElementOrElementGetter<T> = Element<T> | ElementGetter<T>;

type WhenFeatureEnabledFn<T> = (
  whenFeatureEnabled: string,
  element: ElementOrElementGetter<T>
) => ProxiedArray<T>;
type WhenFeatureNotEnabledFn<T> = (
  whenFeatureNotEnabled: string,
  element: ElementOrElementGetter<T>
) => ProxiedArray<T>;
type WhenFn<T> = (when: unknown, element: ElementOrElementGetter<T>) => ProxiedArray<T>;
type WhenNotFn<T> = (whenNot: unknown, element: ElementOrElementGetter<T>) => ProxiedArray<T>;
type AddFn<T> = (element: ElementOrElementGetter<T>) => ProxiedArray<T>;

type ProxiedArray<T> = {
  when: WhenFn<T>;
  whenNot: WhenNotFn<T>;
  whenFeatureEnabled: WhenFeatureEnabledFn<T>;
  whenFeatureNotEnabled: WhenFeatureNotEnabledFn<T>;
  add: AddFn<T>;
} & T[];

/**
 * @about Use to build arrays with conditionally added elements
 * Get rid of `...(isTrue ? ['Foo'] : [])` and replace by `.when(isTrue, 'Foo')`
 *
 * @example const fruit = buildArray().add('Orange').when(weatherIsNice, 'Lime').whenNot(isRaining, 'Grapes')
 * @example const fruit = buildArray(['Default fruit']).add('Orange')
 * @example const fruit = buildArray<string | number>().add('Orange').add(123)
 */
export function buildArray<T = unknown>(initial?: T[]): ProxiedArray<T> {
  const initialArray = (initial ? [...initial] : []) as ProxiedArray<T>;

  const proxiedArray = new Proxy(initialArray, {
    get: (target, prop, receiver) => {
      if ('add' === prop) {
        return (element: ElementOrElementGetter<T>) => {
          target.push(getElement(element));
          return proxiedArray;
        };
      }

      if ('when' === prop) {
        return (when: WhenFn<T>, element: ElementOrElementGetter<T>) => {
          const isConditionMet = getConditionResult(when);
          if (isConditionMet) {
            target.push(getElement(element));
          }
          return proxiedArray;
        };
      }

      if ('whenNot' === prop) {
        return (whenNot: WhenNotFn<T>, element: ElementOrElementGetter<T>) => {
          const isConditionNotMet = complement(getConditionResult)(whenNot);
          if (isConditionNotMet) {
            target.push(getElement(element));
          }
          return proxiedArray;
        };
      }

      if ('whenFeatureEnabled' === prop) {
        return (whenFeatureEnabled: string, element: ElementOrElementGetter<T>) => {
          if (isFeatureEnabled(whenFeatureEnabled)) {
            target.push(getElement(element));
          }
          return proxiedArray;
        };
      }

      if ('whenFeatureNotEnabled' === prop) {
        return (whenFeatureNotEnabled: string, element: ElementOrElementGetter<T>) => {
          if (!isFeatureEnabled(whenFeatureNotEnabled)) {
            target.push(getElement(element));
          }
          return proxiedArray;
        };
      }

      return Reflect.get(target, prop, receiver);
    },
  });

  return proxiedArray;
}

const getElement: <T>(element: ElementOrElementGetter<T>) => Element<T> = when(isFunction, call);
const getConditionResult: <T>(element: WhenFn<T>) => boolean = pipe(
  when(isFunction, call),
  Boolean
);
