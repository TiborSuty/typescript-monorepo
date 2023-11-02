import {action, HandlerFunction} from '@storybook/addon-actions';

export function storybookAction(name: string, handler: HandlerFunction): HandlerFunction {
  return function (...args) {
    action(name)(...args);
    handler(...args);
  };
}
