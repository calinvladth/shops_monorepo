import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  &:hover {
    opacity: .7;
    cursor: pointer;
  }
`

const ContainerTitle = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.spacings.xsm} 0;
  text-align: center;
`

const ContainerDetails = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.spacings.xsm} 0;
  border-top: 1px solid ${({theme}) => theme.colors.black};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.p``

const Style = {
  Container,
  ContainerTitle,
  ContainerDetails,
  Text
}

export default Style
