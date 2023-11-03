import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: grid;
  // TODO: Move this grid values into a global something
  grid-template-columns: 55% 1fr;
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px;
`

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 23px;
`

const Description = styled.p`
  margin: 25px 0;
`

const Specs = styled.div``

const Text = styled.p`
  font-size: 14px;
`

const Actions = styled.div`
  margin: 25px 0;
  display: flex;
  gap: 50px;
`

const ListImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;

  padding-bottom: 15px;
`

const ListImage = styled.div`
  width: 70px;
`

// TODO: Remove this
const ContainerImage = styled.div`
  background-color: ${({theme}) => theme.colors.lightPurple};
  background-image: url("https://server.shops.calinvladth.com/api/media/images/924878971e7e4e6e8ed6e985ec695021.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`


const Style = {
  Container,
  ContainerInfo,
  Title,
  Text,
  Actions,
  ListImages,
  ListImage,
  ContainerImage,
  Description,
  Specs
}

export default Style
