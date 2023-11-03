import Style from './input.styled';
import React from "react";

type InputProps = {
  label?: string,
  value?: string,
  labelError?: string,
  textarea?: boolean,
  error?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export function Input({label, value, labelError, textarea, error, onChange}: InputProps) {

  return <Style.Container>
    <Style.Label error={error}>
      {label}
    </Style.Label>
    {
      textarea ? <Style.Textarea error={error} value={value} onChange={onChange}/> : <Style.Input error={error} value={value} onChange={onChange}/>
    }
    {
      error && <Style.LabelError>{labelError}</Style.LabelError>
    }
  </Style.Container>
}
