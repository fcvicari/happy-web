import { theme, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  ...theme,
  fonts: {
    body: 'nunito, sans-serif',
    heading: 'nunito, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 600,
    medium: 700,
    bold: 800,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    md: '8px',
    lg: '30px',
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      100: '#96FEFF',
      300: '#15C3D6',
      500: '#00C7C7',
      700: '#29B6D1',
    },
    gray: {
      ...theme.colors.gray,
      100: '#CEDEE5',
    },
    yellow: {
      ...theme.colors.yellow,
      500: '#FFD666',
      900: '#8D734B',
    },
  },
  shadows: {
    sm: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    md: '0px 4px 8px rgba(0, 0, 0, 0.25)',
    lg: '0px 8px 16px rgba(0, 0, 0, 0.25)',
  },
  components: {
    Box: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      variants: {
        solid: {
          bg: 'yellow.500',
        },
      },
    },
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'yellow.500',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: {
          bg: 'yellow.500',
        },
      },
    },
  },
});

export default customTheme;
