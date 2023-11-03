import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ProductDescription} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ProductDescription/>
</ThemeProvider>

export default {
  title: 'Odea/Shop/ProductDescription',
  component: <ProductDescription/>
}
