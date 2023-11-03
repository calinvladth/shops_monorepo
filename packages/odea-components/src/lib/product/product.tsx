import Style from './product.styled';
import {ProductImage} from "../product-image/product-image";

export interface ProductType {
  id: string,
  name: string,
  descriptionShort: string,
  descriptionLong: string,
  price: number,
  specs: {
    key: string,
    value: string
  },
  images: {
    path: string
  },
  category: {
    name: string
  }
}

export function Product(props: { data: ProductType, onClick?: () => void }) {
  console.log(props)
  return <Style.Container {...props}>
    <ProductImage/>
    <Style.ContainerTitle>
      <Style.Text>{props.data.name}</Style.Text>
    </Style.ContainerTitle>
    <Style.ContainerDetails>
      <Style.Text>Smoothie</Style.Text>
      <Style.Text>{props.data.price} eur</Style.Text>
    </Style.ContainerDetails>
  </Style.Container>
}
