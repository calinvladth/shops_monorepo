import styled from "styled-components";

const Container = styled.div<{columns: number}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: 75px;

  > div {
    border: 1px solid red;
  }
`;


const Style = {
  Container
};

export default Style
