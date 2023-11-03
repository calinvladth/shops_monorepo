import Style from './button.styled'
import {useTheme} from "styled-components";
import React, {ReactNode} from "react";

export function Button(props: { buttonType?: string, children?: ReactNode, onClick?: () => void, showFull?: boolean }) {
  const theme = useTheme()
  const buttonsOptions = {
    basic: {
      color: theme.colors.black,
      borderColor: 'transparent',
      backgroundColor: theme.colors.white
    },
    success: {
      color: theme.colors.white,
      borderColor: 'transparent',
      backgroundColor: theme.colors.green
    },
    edit: {
      color: theme.colors.black,
      borderColor: theme.colors.orange,
      backgroundColor: theme.colors.transparent
    },
    cancel: {
      color: theme.colors.black,
      borderColor: theme.colors.orange,
      backgroundColor: theme.colors.lightPurple
    }
  }

  return <Style.Container
    {...buttonsOptions[props.buttonType as keyof typeof buttonsOptions]}
    {...props}
  >{props.children}</Style.Container>
}
