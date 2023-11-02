import {ComponentStyleConfig, ThemeComponentProps} from '@chakra-ui/react';

export const sizeStyles: any = {
  height: 'unset',
  minWidth: 'unset',
  paddingInlineEnd: '1px',
  paddingInlineStart: '1px',
};

export const linkStyles: any = {
  borderRadius: 0,
  padding: 0,
  _hover: {
    textDecoration: 'none',
  },
};

export const neutralStatesStyles: any = {
  _hover: {
    bg: 'palettes.neutral.30.100',
  },
  _active: {
    bg: 'palettes.neutral.40.100',
  },
};

// @ts-expect-error Vite rewrite
export const buttonTheme: ComponentStyleConfig = {
  parts: ['leftIcon', 'rightIcon'],
  defaultProps: {
    size: 'default',
    variant: 'primary',
  },
  baseStyle: {
    position: 'relative',
    borderRadius: 'border_radius_2',
    fontWeight: 'regular',
    _disabled: {
      opacity: 0.4,
    },
    _focus: {
      boxShadow: 'focus',
    },

    leftIcon: {
      mr: '4px',
    },

    rightIcon: {
      ml: '4px',
    },

    _loading: {
      pointerEvents: 'none',
      '.eag--spinner__wrapper': {
        borderRadius: 'border_radius_2',
        position: 'absolute',
        height: '100%',
      },
    },
  },
  variants: {
    primary: {
      bg: 'general.accent',
      color: 'palettes.white.10.100',
      _hover: {
        bg: 'palettes.blue.70.100',

        _disabled: {
          bg: 'general.accent',
        },
      },
      _active: {
        bg: 'palettes.blue.80.100',
      },
    },
    secondary: {
      bg: 'palettes.neutral.30.100',
      color: 'text.primary',
      _hover: {
        bg: 'palettes.neutral.40.100',

        _disabled: {
          bg: 'palettes.neutral.30.100',
        },
      },
      _active: {
        bg: 'palettes.neutral.50.100',
      },
    },
    danger: {
      bg: 'severity.danger',
      color: 'palettes.white.10.100',
      _hover: {
        bg: 'palettes.red.70.100',

        _disabled: {
          bg: 'palettes.red.70.100',
        },
      },
      _active: {
        bg: 'palettes.red.80.100',
      },
    },
    outlined: {
      borderWidth: 1,
      borderColor: 'palettes.neutral.70.100',
      backgroundColor: 'palettes.white.10.100',
      color: 'text.primary',
      _hover: {
        borderColor: 'palettes.neutral.200.100',
      },
      _active: {
        boxShadow: 'none',
        borderColor: 'palettes.neutral.900.100',
      },
      _focus: {
        boxShadow: 'none',
        borderColor: 'palettes.neutral.900.100',
      },
    },
    ghost: {
      color: 'text.primary',
      ...neutralStatesStyles,
      borderRadius: '4px',
    },
    ghostLink: {
      color: 'general.accent',
      ...neutralStatesStyles,
    },
    errorLink: {
      color: 'text.danger',
      ...neutralStatesStyles,
    },
    link: {
      ...linkStyles,
      color: 'general.accent',
      _hover: {
        textDecoration: 'underline',
      },
      _disabled: {
        opacity: 0.4,
      },
    },
    dangerOutlined: {
      color: 'text.danger',
      border: '1px solid',
      backgroundColor: 'palettes.white.10.100',
      borderColor: 'severity.danger',
      _hover: {
        borderColor: 'palettes.red.80.100',
      },
      _active: {
        boxShadow: 'none',
        borderColor: 'palettes.red.90.100',
      },
      _focus: {
        boxShadow: 'none',
        borderColor: 'palettes.red.90.100',
      },
    },
    dangerGhost: {
      color: 'text.danger',
      ...neutralStatesStyles,
    },
    dangerLink: {
      ...linkStyles,
      color: 'text.danger',
      _hover: {
        textDecoration: 'underline',
      },
    },
    header: {
      borderWidth: 0,
      color: 'text.primary',
      ...neutralStatesStyles,
      borderRadius: 0,
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  sizes: {
    small: (props) => ({
      ...sizeStyles,
      fontSize: 'text.xSmall',
      lineHeight: 'text.xSmall',
      fontWeight: 'regular',
      letterSpacing: 0,
      // @ts-expect-error Vite rewrite
      ...(isOutlined(props)
        ? {
            py: '3px',
            px: '8px',
          }
        : {
            py: '4px',
            px: '8px',
          }),
      minW: '24px',

      leftIcon: {
        mr: '4px',
      },

      rightIcon: {
        ml: '4px',
      },
    }),
    default: (props) => ({
      ...sizeStyles,
      fontSize: 'text.small',
      lineHeight: 'text.small',
      fontWeight: 'regular',
      letterSpacing: 0,
      // @ts-expect-error Vite rewrite
      ...(isOutlined(props)
        ? {
            py: '5px',
            px: '12px',
          }
        : {
            py: '6px',
            px: '12px',
          }),
      minW: '32px',
    }),
    header: {
      height: '48px',
      width: '48px',
    },
  },
};

function isOutlined(props: ThemeComponentProps): boolean {
  return props.variant === 'outlined' || props.variant === 'dangerOutlined';
}
