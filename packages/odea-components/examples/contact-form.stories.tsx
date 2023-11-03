import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, ContactForm} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <ContactForm/>
</ThemeProvider>

export default {
  title: 'Odea/Contact/Form',
  component: <ContactForm/>
}
