import {appendSuffix} from './appendSuffix';

//TODO: Import from platform & move to shared
interface TestIdProps {
  'data-testid'?: string;
}

export function suffixTestId<T extends TestIdProps>(suffix: string, testIdProps: T): string {
  return appendSuffix(suffix, testIdProps['data-testid']);
}
