import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`

const ContainerShell = styled.div<{justifyContent: string}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`

const ContainerInfo = styled.p``

const Style = {
  Container,
  ContainerShell,
  ContainerInfo
}

export default Style;
