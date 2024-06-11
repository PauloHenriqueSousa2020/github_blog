

import { Profile } from "@/components/Profile";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";

import * as S from "./styles";

export function Home() {
  return (
    <S.HomeContainer>
      <Profile />
      <S.SearchContainer>
        <div className="header">
          <p>Publicações</p>
          <span>6 publicações</span>
        </div>

        <Input />
      </S.SearchContainer>
      
      <S.CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardContainer>
    </S.HomeContainer>
  )
}