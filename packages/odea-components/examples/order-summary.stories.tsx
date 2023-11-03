import styled, {ThemeProvider} from "styled-components";
import {theme, GlobalStyle, OrderSummary} from "../src";

const Row = styled.div`
  width: 400px
`
export const Primary = () => <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <Row>
    <OrderSummary showCheckoutRedirect={false} showCartPreview={false} showSummary={true}/>
  </Row>
  <hr/>
  <Row>
    <OrderSummary showCheckoutRedirect={true} showCartPreview={false} showSummary={true}/>
  </Row>
  <hr/>
  <Row>
    <OrderSummary showCheckoutRedirect={false} showCartPreview={true} showSummary={true}/>
  </Row>
</ThemeProvider>

export default {
  title: 'Odea/Global/OrderSummary',
  component: <OrderSummary/>
}
