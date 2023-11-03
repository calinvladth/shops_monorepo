import Style from './product-quantity.styled'

export function ProductQuantity() {
  const SIZE = 50;

  return <Style.Container>
    <Style.Counter size={SIZE}>
      1
    </Style.Counter>
    <Style.Actions size={SIZE}>
      <Style.Button onClick={() => alert('ADD')}>+</Style.Button>
      <Style.Button onClick={() => alert('SUBTRACT')}>-</Style.Button>
    </Style.Actions>

  </Style.Container>
}
