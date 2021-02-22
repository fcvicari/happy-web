import React from 'react';
import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <head>
        <title>Happy - Faça uma criança feliz</title>
      </head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
