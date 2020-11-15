import React from 'react';
import { AppProps } from 'next/app';

import ThemeContainer from '../contexts/theme/ThemeContainer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContainer>
      <head>
        <title>Happy - Faça uma criança feliz</title>
      </head>
      <Component {...pageProps} />
    </ThemeContainer>
  );
};

export default MyApp;
