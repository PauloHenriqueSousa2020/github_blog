import React from "react";
import * as S from "./styles";


export function Input({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.InputContainer 
      type="text"
      placeholder="Buscar conteúdo"
      name="search"
      {...rest}
    />
  )
}