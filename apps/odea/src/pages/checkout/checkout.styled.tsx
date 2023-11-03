import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 55% 1fr;
  grid-column-gap: 75px;
  padding: 75px 75px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
`

const Style = {
  Container,
  Column
}

export default Style
