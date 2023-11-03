import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ContactHero} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ContactHero/>
</ThemeProvider>

export default {
  title: 'Odea/Contact/Hero',
  component: <ContactHero/>
}
