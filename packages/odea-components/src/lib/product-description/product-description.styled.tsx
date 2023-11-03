import styled from "styled-components";

const Container = styled.section`
  border: 1px solid ${({theme}) => theme.colors.black};
`

const ContainerTitle = styled.div`
  background-color: ${({theme}) => theme.colors.orange};
  border-bottom: 1px solid ${({theme}) => theme.colors.black};
  padding: 25px 0;
`

const ContainerText = styled.div`
  padding: 75px;
`

const Title = styled.h2`
  color: ${({theme}) => theme.colors.white};
  font-size: 22px;
  text-align: center;
`

const Text = styled.p`
  font-size: 16px;
`

const Style = {
  Container,
  ContainerTitle,
  ContainerText,
  Title,
  Text
}

export default Style
