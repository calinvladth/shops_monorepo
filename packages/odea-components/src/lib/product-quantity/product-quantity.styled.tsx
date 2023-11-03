import styled from "styled-components";

const Container = styled.div`
  width: auto;
  display: inline-flex;
  border: 1px solid ${({theme}) => theme.colors.black};
  user-select: none;
`

const Counter = styled.div<{size: number}>`
  aspect-ratio: 1;
  width: ${(props) => props.size}px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`

const Actions = styled.div<{size: number}>`
  width: ${(props) => props.size / 2}px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  border-left: 1px solid ${({theme}) => theme.colors.black};

  > span:nth-child(1) {
    border-bottom: 1px solid ${({theme}) => theme.colors.black};
  }
`

const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  cursor: pointer;
`

const Style = {
  Container,
  Counter,
  Actions,
  Button
}

export default Style
