import styled from "styled-components";
import {b} from "vitest/dist/types-198fd1d9";

const Container = styled.div`
  width: 100%;
`;

const Input = styled.input<{error?: boolean}>`
  width: 100%;
  font-size: 16px;
  padding: 15px;
  outline: none;
  border: 1px solid ${({theme, error}) => error ? theme.colors.red : theme.colors.black};
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 0;
  -webkit-appearance: none;

  &:focus {
    border: 1px solid ${({theme}) => theme.colors.orange}
  }
`;

const Textarea = styled.textarea<{error?: boolean}>`
  width: 100%;
  height: 100px;
  font-size: 16px;
  padding: 15px;
  outline: none;
  border: 1px solid ${({theme, error}) => error ? theme.colors.red : theme.colors.black};
  background-color: ${({theme}) => theme.colors.white};

  resize: vertical;

  border-radius: 0;
  -webkit-appearance: none;

  &:focus {
    border: 1px solid ${({theme}) => theme.colors.orange}
  }
`

const Label = styled.label<{error?: boolean}>`
  display: block;
  color: ${({theme, error}) => error ? theme.colors.red : theme.colors.black};
  font-size: 14px;
  padding-bottom: 5px;
`;

const LabelError = styled.label`
  color: ${({theme}) => theme.colors.red};
  font-size: 12px;
`

const Style = {
  Container,
  Input,
  Textarea,
  Label,
  LabelError
};

export default Style;
