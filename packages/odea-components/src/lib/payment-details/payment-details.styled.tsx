import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Row = styled.div<{active?: boolean}>`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 1px solid ${({theme, active}) => active ? theme.colors.green : theme.colors.black};
  cursor: pointer;

  ${({active}) => !active && `
    &:hover {
      opacity: .6;
    }
  `}
`;

const Text = styled.p<{active?: boolean}>`
  font-size: 16px;
  color: ${({theme, active}) => active ? theme.colors.green : theme.colors.black};
`

const Style = {
  Container,
  Row,
  Text
};

export default Style;
