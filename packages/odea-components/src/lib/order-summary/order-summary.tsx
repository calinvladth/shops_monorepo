import Style from './order-summary.styled';
import {ProductImage} from "../product-image/product-image";
import {Button} from "../button/button";

type OrderSummaryProps = {
  showCheckoutRedirect?: boolean,
  showCartPreview?: boolean,
  showSummary?: boolean
}

export function OrderSummary({
                               showCheckoutRedirect = true,
                               showCartPreview = false,
                               showSummary = true
                             }: OrderSummaryProps) {
  return <Style.Container>
    {showCheckoutRedirect && <Checkout/>}
    {showCartPreview && <CartPreview/>}
    {showSummary && <Summary/>}
  </Style.Container>
}

function Checkout() {
  return <Style.ContainerCheckout>
    <Button buttonType="success" onClick={() => alert('Checkout')} showFull>
      Checkout
    </Button>
  </Style.ContainerCheckout>
}

function CartPreview() {
  return <Style.ContainerCart>
    <Style.Title>
      CART
    </Style.Title>

    <Style.ContainerRow>
      <Style.Text>2 item in your cart</Style.Text>
      <Style.Text>Edit</Style.Text>
    </Style.ContainerRow>

    <Style.ContainerRow>
      <Style.ContainerProduct>
        <ProductImage width={50}/>
        <Style.SmallText>Blueberry Cocktail</Style.SmallText>
      </Style.ContainerProduct>

      <Style.Text>
        20€
      </Style.Text>
    </Style.ContainerRow>

  </Style.ContainerCart>
}

function Summary() {
  return <Style.ContainerSummary>
    <Style.Title>
      YOUR ORDER SUMMARY
    </Style.Title>

    <Style.ContainerRow>
      <Style.Text>Subtotal</Style.Text>
      <Style.Text>45€</Style.Text>
    </Style.ContainerRow>
    <Style.ContainerRow>
      <Style.Text>Shipping</Style.Text>
      <Style.Text>20€</Style.Text>
    </Style.ContainerRow>
    <Style.ContainerRow>
      <Style.Text>Total</Style.Text>
      <Style.Text>65€</Style.Text>
    </Style.ContainerRow>
  </Style.ContainerSummary>
}
