import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ProductRelatedProducts} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ProductRelatedProducts/>
</ThemeProvider>

export default {
  title: 'Odea/Shop/ProductRelatedProducts',
  component: <ProductRelatedProducts/>
}
