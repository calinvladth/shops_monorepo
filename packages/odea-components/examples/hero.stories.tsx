import {theme, Hero, GlobalStyle} from "../src";
import {ThemeProvider} from "styled-components";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <Hero/>
</ThemeProvider>

export default {
  title: 'Odea/Home/Hero',
  component: <Hero/>
}
