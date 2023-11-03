import styled from "styled-components";
import AboutBg from '../../assets/about_bg.jpg';

const Container = styled.section`
  width: 100%;
  min-height: 50rem;

  background-color: ${({theme}) => theme.colors.orange};

  display: grid;
  grid-template-columns: 55% 1fr;
`

const ContainerImage = styled.div`
  background-image: url("${AboutBg}");
  background-size: cover;
  background-position: center;
`

const ContainerDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${({theme}) => theme.spacings.screenPadding};

  color: ${({theme}) => theme.colors.white};
`

const Title = styled.h2`
  font-size: ${({theme}) => theme.fonts.md};
  margin-bottom: ${({theme}) => theme.spacings.sm}
`

const Text = styled.p``

const Style = {
  Container,
  ContainerImage,
  ContainerDetails,
  Text,
  Title
}

export default Style
