import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, Button} from "../src";

export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <Button buttonType="basic" onClick={() => alert('Action Basic')}>Basic</Button>
  <hr/>
  <Button buttonType="success" onClick={() => alert('Action Success')}>Success</Button>
  <hr/>
  <Button buttonType="edit" onClick={() => alert('Action Edit')}>Edit</Button>
  <hr/>
  <Button buttonType="cancel" onClick={() => alert('Action Cancel')}>Cancel</Button>
</ThemeProvider>

export default {
  title: 'Odea/Global/Button',
  component: <Button/>
}
