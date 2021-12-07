import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';
import ButtonToSeeThemeWorking from './components/ButtonToSeeThemeWorking';

const App: React.FC = function () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ButtonToSeeThemeWorking />
    </ThemeProvider>
  );
};

export default App;
