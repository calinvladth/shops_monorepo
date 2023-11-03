import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, BillingDetails} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <BillingDetails/>
</ThemeProvider>

export default {
  title: 'Odea/Global/BillingDetails',
  component: <BillingDetails/>
}
