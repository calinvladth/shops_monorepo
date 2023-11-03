import {theme, GlobalStyle, Product} from "../src";
import {ThemeProvider} from "styled-components";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <div style={{width: '300px'}}>
    <Product/>
  </div>
</ThemeProvider>

export default {
  title: 'Odea/Global/Product',
  component: <Product/>
}
