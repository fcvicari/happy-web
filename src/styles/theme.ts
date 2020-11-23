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
      300: '#29B6D1',
    },
    gray: {
      ...theme.colors.gray,
      100: '#CEDEE5',
    },
    yellow: {
      ...theme.colors.yellow,
      500: '#FFD666',
    },
  },
});

export default customTheme;
