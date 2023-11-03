import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  background-color: ${({theme}) => theme.colors.orange};
  padding: 50px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ContainerCheckout = styled.div``

const ContainerCart = styled.div``;

const ContainerSummary = styled.div``;

const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 0;
`;

const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-align: center;

  padding-bottom: 25px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const SmallText = styled.p`
  font-size: 12px;
`

const Style = {
  Container,
  ContainerCheckout,
  ContainerCart,
  ContainerSummary,
  ContainerRow,
  ContainerProduct,
  Title,
  Text,
  SmallText
};

export default Style;
