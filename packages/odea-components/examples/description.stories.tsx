import {theme, GlobalStyle, Description} from "../src";
import {ThemeProvider} from "styled-components";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <Description/>
</ThemeProvider>

export default {
  title: 'Odea/Home/Description',
  component: <Description/>
}
