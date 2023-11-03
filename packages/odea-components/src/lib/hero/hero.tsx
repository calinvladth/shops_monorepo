import Style from './hero.styled'
import {Button} from "../button/button";

export function Hero() {
  function buttonAction() {
    alert('Button Action From Hero')
  }

  return <Style.Container>
    <Style.ContainerDetails>
      <div>
        <Style.Title>
          For fresh summer days.
        </Style.Title>
        <Style.ButtonContainer>
          <Button buttonType="basic" onClick={buttonAction}>Start shopping</Button>
        </Style.ButtonContainer>
      </div>
    </Style.ContainerDetails>
    <Style.ContainerImage/>
  </Style.Container>
}
