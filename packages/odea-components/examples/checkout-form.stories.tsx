import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, CheckoutForm} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <CheckoutForm/>
</ThemeProvider>

export default {
  title: 'Odea/Checkout/Form',
  component: <CheckoutForm/>
}
