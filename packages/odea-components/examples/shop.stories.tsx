import {theme, GlobalStyle, Shop} from "../src";
import {ThemeProvider} from "styled-components";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <Shop/>
</ThemeProvider>

export default {
  title: 'Odea/Home/Shop',
  component: <Shop/>
}
