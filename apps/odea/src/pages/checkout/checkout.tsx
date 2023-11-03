import Style from './checkout.styled'
import {BillingDetails, Button, OrderSummary, PaymentDetails} from "@react-monorepo/odea-components";

function Checkout() {
  return <Style.Container>
    <Style.Column>
      <BillingDetails/>
      <PaymentDetails/>
    </Style.Column>
    <Style.Column>
      <OrderSummary showCheckoutRedirect={false} showCartPreview/>
    </Style.Column>
  </Style.Container>
}

export default Checkout
