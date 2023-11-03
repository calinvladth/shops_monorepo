import Style from './product.styled';
import {ProductDescription, ProductRelatedProducts, ProductView} from "@react-monorepo/odea-components";

function Product() {
  return <Style.Container>
    <ProductView/>
    <Style.Sections>
      <ProductDescription/>
      <ProductRelatedProducts/>
    </Style.Sections>
  </Style.Container>
}

export default Product;
