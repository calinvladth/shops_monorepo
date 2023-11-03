import Style from "./product-view.styled";
import {ProductQuantity} from "../product-quantity/product-quantity";
import {Button} from "../button/button";
import {ProductImage} from "../product-image/product-image";

export function ProductView() {
  return <Style.Container>

    <Style.ContainerInfo>
      <Style.Title>
        <span>Blueberry Cocktail</span>
        <span>Price: 25 eur</span>
      </Style.Title>

      <Style.Description>
        Blueberry smoothie made with fresh and organic ingredients
      </Style.Description>

      <Style.Specs>
        <Style.Text>
          <span>Category: </span>
          <span>Smoothie</span>
        </Style.Text>
        <Style.Text>
          <span>Ingredients: </span>
          <span>BlueBerry, Oat, Lime, Kale</span>
        </Style.Text>
        <Style.Text>
          <span>Quantity: </span>
          <span>350 Ml</span>
        </Style.Text>
        <Style.Text>
          <span>Nutritional Value: </span>
          <span>250 Cal</span>
        </Style.Text>

      </Style.Specs>

      <Style.Actions>
        <ProductQuantity/>
        <Button buttonType="success" onClick={() => alert('Add to cart')}>Add to cart</Button>
      </Style.Actions>

      <Style.ListImages>
        <Style.ListImage>
          <ProductImage showBorder onClick={() => alert('Photo 1')}/>
        </Style.ListImage>
        <Style.ListImage>
          <ProductImage showBorder onClick={() => alert('Photo 2')}/>
        </Style.ListImage>
        <Style.ListImage>
          <ProductImage showBorder onClick={() => alert('Photo 3')}/>
        </Style.ListImage>
        <Style.ListImage>
          <ProductImage showBorder onClick={() => alert('Photo 4')}/>
        </Style.ListImage>
      </Style.ListImages>
    </Style.ContainerInfo>

    <Style.ContainerImage/>

  </Style.Container>
}
