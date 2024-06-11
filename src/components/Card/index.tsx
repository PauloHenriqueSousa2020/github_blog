import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import * as S from "./styles";

interface CardProps {
  item: {
    id: number;
    body: string;
    updated_at: string;
    title: string;
    number: number;
  }
}

export function Card({ item }: CardProps) {
  return (
    <S.CardContainer to={`/issues/${item.number}`}>
      <S.CardHeader>
        <label>{item.title}</label>
        <span>{formatDistanceToNow(item.updated_at, { addSuffix: true, locale: ptBR })}</span>
      </S.CardHeader>
      <S.CardDescription>
        <ReactMarkdown className='markdown'>
          {item.body}
        </ReactMarkdown>
      </S.CardDescription>
    </S.CardContainer>
  )
}