import { render, screen } from '@testing-library/react';
import { FC } from 'react';
import { createContext } from '../createContext';

describe('createContext', () => {
  it('creates context with default options', () => {
    const [Provider, useMyContext] = createContext<number>();

    const Component: FC = () => {
      const value = useMyContext();
      return <div>{value}</div>;
    };

    expect(() => render(<Component />)).toThrow(
      'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider'
    );
  });

  it('creates context with custom error message', () => {
    const [Provider, useMyContext] = createContext<number>({
      errorMessage: 'Custom error message',
    });

    const Component: FC = () => {
      const value = useMyContext();
      return <div>{value}</div>;
    };

    expect(() => render(<Component />)).toThrow('Custom error message');
  });

  it('creates context with strict mode off', () => {
    const [Provider, useMyContext] = createContext<number>({
      strict: false,
    });

    const Component: FC = () => {
      const value = useMyContext();
      return <div>{value}</div>;
    };

    expect(() => render(<Component />)).not.toThrow();
  });

  it('creates context with display name', () => {
    const [Provider, useMyContext, Context] = createContext<number>({
      name: 'MyContext',
    });

    expect(Context.displayName).toBe('MyContext');
  });

  xit('provides and consumes the context value', () => {
    const [Provider, useMyContext] = createContext<number>();

    const Component: FC = () => {
      const value = useMyContext();
      return <div>{value}</div>;
    };

    render(
      <Provider value={42}>
        <Component />
      </Provider>
    );

    expect(screen.getByText('42')).toBeInTheDocument();
  });
});
