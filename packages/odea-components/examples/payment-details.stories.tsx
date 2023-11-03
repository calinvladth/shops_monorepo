import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, PaymentDetails} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <PaymentDetails/>
</ThemeProvider>

export default {
  title: 'Odea/Global/PaymentDetails',
  component: <PaymentDetails/>
}
