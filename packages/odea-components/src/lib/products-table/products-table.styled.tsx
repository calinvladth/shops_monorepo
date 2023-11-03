import styled from "styled-components";

const Container = styled.div``;

const ContainerRow = styled.div`
  display: grid;
  grid-template-columns: 40% repeat(3, 1fr);
  padding: 10px 25px;

  border-bottom: 1px solid ${({theme}) => theme.colors.orange};
`;

const ContainerColumn = styled.div<{justifyContent?: string, alignItems?: string}>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
  gap: 10px
`

const ContainerImage = styled.div`
  width: 60px;
`

const Text = styled.p`
  font-size: 14px;
`

const Style = {
  Container,
  ContainerRow,
  ContainerColumn,
  ContainerImage,
  Text
}

export default Style
