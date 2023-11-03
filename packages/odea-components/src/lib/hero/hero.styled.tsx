import styled from "styled-components";
import HeroBg from '../../assets/hero_bg.jpg'

const Container = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* mobile viewport bug fix */
  //min-height: -webkit-fill-available;
  background-color: ${({theme}) => theme.colors.lightGreen};

  display: grid;
  grid-template-columns: 55% 1fr;
`

const ContainerDetails = styled.div`
  padding: ${({theme}) => theme.spacings.screenPadding};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  display: table-caption;
  font-size: 50px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.white};
  line-height: 60px;
  letter-spacing: 10px`;


const ButtonContainer = styled.div`
  margin-top: ${({theme}) => theme.spacings.sm};
`

const ContainerImage = styled.div`
  width: 100%;

  background-image: url("${HeroBg}");
  background-size: cover;
  background-position: center;
`

const Style = {
  Container,
  ContainerImage,
  ContainerDetails,
  Title,
  ButtonContainer
}

export default Style;
