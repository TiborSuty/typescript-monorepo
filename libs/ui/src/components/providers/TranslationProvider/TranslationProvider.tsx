import { useMemo, ReactNode } from 'react';

import { identity } from 'ramda';
import { createContext } from '../../../utils/createContext';

export type TranslationInterpreter = (
  key: string,
  ...args: unknown[]
) => string;

interface TranslationContextProps {
  t?: TranslationInterpreter;
  children: ReactNode;
}

const [TranslationContextProvider, useTranslationContext] =
  createContext<TranslationInterpreter>({
    strict: true,
    name: 'TranslationContext',
  });

export { TranslationContextProvider, useTranslationContext };

export function TranslationProvider(props: TranslationContextProps) {
  const contextValue = useMemo(() => props.t ?? identity, [props.t]);

  return (
    <TranslationContextProvider value={contextValue}>
      {props.children}
    </TranslationContextProvider>
  );
}
