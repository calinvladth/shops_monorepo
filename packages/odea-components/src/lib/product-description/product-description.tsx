import Style from './product-description.styled'

export function ProductDescription() {
  return <Style.Container>
    <Style.ContainerTitle>
      <Style.Title>DESCRIPTION</Style.Title>
    </Style.ContainerTitle>
    <Style.ContainerText>
      <Style.Text>
        A smoothie is a drink made from pureed raw fruit and/or vegetables, using a blender. a smoothie often has a
        liquid base such as water, fruit juice, plant milk, and sometimes dairy products, such as milk, yogurt, ice
        cream or cottage cheese.
      </Style.Text>
    </Style.ContainerText>
  </Style.Container>
}
