import styled from "styled-components";

const Container = styled.div<{width?: number, showBorder: boolean}>`
  aspect-ratio: 0.7;

  background-image: url("https://server.shops.calinvladth.com/api/media/images/924878971e7e4e6e8ed6e985ec695021.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-sizing: border-box;

  ${({theme, showBorder}) => showBorder && `
    cursor: pointer;
    border: 1px solid ${theme.colors.black};

    &:hover {
      border: 1px solid ${theme.colors.orange};
    }

    &:active {
      border: 2px solid ${theme.colors.orange};
    }
  `}

  ${({width}) => width && `
    width: ${width}px;
  `}
`

const Style = {
  Container
}

export default Style;
