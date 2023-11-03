import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ProductView} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ProductView/>
</ThemeProvider>

export default {
  title: 'Odea/Shop/ProductView',
  component: <ProductView/>
}
