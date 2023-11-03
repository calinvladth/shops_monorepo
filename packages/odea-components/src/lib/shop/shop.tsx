import {Product, ProductType} from "../product/product";
import Style from './shop.styled'

export function Shop({products}: {products: ProductType[]}) {
  return <Style.Container columns={4}>
    {
      products.map(product => <Product data={product} onClick={() => alert(`OPEN ${product.id}`)}/>)
    }
  </Style.Container>
}

