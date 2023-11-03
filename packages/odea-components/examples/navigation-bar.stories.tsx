import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, NavigationBar} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <NavigationBar/>
</ThemeProvider>

export default {
  title: 'Odea/Global/NavigationBar',
  component: <NavigationBar/>
}
