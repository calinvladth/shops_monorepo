import Style from './products-table.styled'
import {ProductImage} from "../product-image/product-image";
import {ProductQuantity} from "../product-quantity/product-quantity";

export function ProductsTable() {
  return <Style.Container>
    <Style.ContainerRow>
      <Style.ContainerColumn>
        <Style.Text>Product</Style.Text>
      </Style.ContainerColumn>
      <Style.ContainerColumn justifyContent="center">
        <Style.Text>Price</Style.Text>
      </Style.ContainerColumn>
      <Style.ContainerColumn justifyContent="center">
        <Style.Text>Quantity</Style.Text>
      </Style.ContainerColumn>
      <Style.ContainerColumn justifyContent="flex-end">
        <Style.Text>Total</Style.Text>
      </Style.ContainerColumn>
    </Style.ContainerRow>

    <Style.ContainerRow>
      <Style.ContainerColumn alignItems="center">
        <Style.ContainerImage>
          <ProductImage/>
        </Style.ContainerImage>
        <Style.Text>Blueberry Cocktail</Style.Text>
      </Style.ContainerColumn>
      <Style.ContainerColumn justifyContent="center" alignItems="center">
        <Style.Text>20 eur</Style.Text>
      </Style.ContainerColumn>
      <Style.ContainerColumn justifyContent="center" alignItems="center">
        <ProductQuantity/>
      </Style.ContainerColumn>
      <Style.ContainerColumn justifyContent="flex-end" alignItems="center">
        <Style.Text>20 eur</Style.Text>
      </Style.ContainerColumn>
    </Style.ContainerRow>
  </Style.Container>
}
