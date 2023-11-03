import {theme, GlobalStyle, ShopFilters} from "../src";
import {ThemeProvider} from "styled-components";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ShopFilters/>
</ThemeProvider>

export default {
  title: 'Odea/Home/ShopFilters',
  component: <ShopFilters/>
}
