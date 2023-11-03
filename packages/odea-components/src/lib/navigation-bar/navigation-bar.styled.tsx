import styled from "styled-components";
import LogoImage from '../../assets/logo.png'
import LogoLightImage from '../../assets/logo-light.png'

const Container = styled.nav`
  border: 1px solid red;
  height: 75px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 25px;

  > div {
    border: 1px solid black;
  }
`;

const LogoContainer = styled.div`
  height: inherit;
  padding: 20px 0;
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  object-position: center;
  object-fit: contain;
`

const Style = {
  Container,
  LogoContainer,
  Logo
}

export default Style;
