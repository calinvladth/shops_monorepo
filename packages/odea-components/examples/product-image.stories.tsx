import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ProductImage} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ProductImage width={50} showBorder={true} onClick={() => alert("Product image small with border and action")}/>
  <hr/>
  <ProductImage width={150} showBorder={true} onClick={() => alert("Product image bigger with border and action")}/>
  <hr/>
  <ProductImage width={150}/>
</ThemeProvider>

export default {
  title: 'Odea/Global/ProductImage',
  component: <ProductImage/>
}
