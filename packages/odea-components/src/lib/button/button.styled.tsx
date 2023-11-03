import styled from "styled-components";


const Container = styled.button<{color: string, borderColor: string, backgroundColor: string, showFull?: boolean}>`
  min-width: 200px;
  color: ${({color, theme}) => color || theme.colors.black};
  cursor: pointer;
  border: 1px solid ${({borderColor, theme}) => borderColor || theme.colors.black};
  background-color: ${({backgroundColor, theme}) => backgroundColor || theme.colors.white};

  outline: none;
  text-transform: capitalize;
  font-weight: 400;

  padding: 10px 25px;

  position: relative;
  z-index: 100;

  ${({showFull}) => showFull && `
    width: 100%;
  `}
`


const Style = {
  Container
}

export default Style
