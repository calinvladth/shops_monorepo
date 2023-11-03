import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, Input} from "../src";
import {useState} from "react";

export const Primary = () => {
  const [text, setText] = useState('');
  return <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Input label="Label" value={text} onChange={(e) => setText(e.target.value)}/>
    <hr/>
    <Input label="Label" value={text} labelError="Text needs at least 8 characters" error={text.length < 8}/>
    <hr/>
    <Input label="Label" value={text} textarea/>
    <hr/>
    <Input label="Label" value={text} labelError="Text needs at least 12 characters" error={text.length < 12} textarea/>
  </ThemeProvider>
}

export default {
  title: 'Odea/Global/Input',
  component: <Input/>
}
