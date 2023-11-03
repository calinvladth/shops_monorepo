import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "@react-monorepo/odea-components";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
