import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, Footer} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <Footer/>
</ThemeProvider>

export default {
  title: 'Odea/Global/Footer',
  component: <Footer/>
}
