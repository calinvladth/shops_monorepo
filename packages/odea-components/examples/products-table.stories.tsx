import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ProductsTable} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ProductsTable/>
</ThemeProvider>

export default {
  title: 'Odea/Cart/ProductsTable',
  component: <ProductsTable/>
}
