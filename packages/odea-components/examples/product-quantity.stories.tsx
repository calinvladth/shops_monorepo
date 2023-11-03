import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ProductQuantity} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ProductQuantity/>
</ThemeProvider>

export default {
  title: 'Odea/Global/ProductQuantity',
  component: <ProductQuantity/>
}
