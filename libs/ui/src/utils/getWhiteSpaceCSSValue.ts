import {match} from 'ts-pattern';

import {always} from 'ramda';

export const getWhiteSpaceCSSValue = (props: {noWrap?: boolean; preWrap?: boolean}) =>
  match([!!props.noWrap, !!props.preWrap])
    .with([true, false], always('nowrap'))
    .with([false, true], always('pre-wrap'))
    .with([false, false], always('inherit'))
    .otherwise(() => {
      throw new Error('Cannot use both noWrap and preWrap');
    });
