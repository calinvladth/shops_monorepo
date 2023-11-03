import Style from './navigation-bar.styled';
import LogoImage from '../../assets/logo.png'

export function NavigationBar() {
  return <Style.Container>

    <Style.LogoContainer>
      <Style.Logo src={LogoImage}/>
    </Style.LogoContainer>
    <div>2</div>

  </Style.Container>
}
