import Style from './cart.styled';
import {OrderSummary, ProductsTable} from "@react-monorepo/odea-components";

function Cart() {
  return <Style.Container>
    <ProductsTable/>
    <OrderSummary/>
  </Style.Container>
}

export default Cart
