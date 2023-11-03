import styled from "styled-components";


const Container = styled.section`
  grid-column: 1 / 3;
  padding: ${({theme}) => theme.spacings.xsm};
  background-color: ${({theme}) => theme.colors.lightPurple};
`

const ContainerFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacings.sm};
`

const ContainerAction = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacings.sm};
  margin-top: ${({theme}) => theme.spacings.sm};
`

const Select = styled.select`
  display: block;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: none;
  border: 1px solid ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  padding: 10px 25px;
  vertical-align: center;
`

const Option = styled.option``

const Style = {
  Container,
  ContainerFilters,
  ContainerAction,
  Select,
  Option
}

export default Style
