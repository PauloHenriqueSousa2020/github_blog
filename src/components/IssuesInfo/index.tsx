import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";

import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import * as S from './styles';
import { Link } from "react-router-dom";

interface IssuesInfoProps {
  item: {
    id: number;
    body: string;
    updated_at: string;
    title: string;
    html_url: string;
    comments: number;
    user: {
      login: string;
    }
  }
}

export function IssuesInfo({ item }: IssuesInfoProps) {
  return (
    <S.IssuesInfoContainer>
      <S.IssuesInfoHeader>
        <Link to={"/"}>
          <MdOutlineKeyboardArrowLeft size={20} />
          VOLTAR
        </Link>
        <a href={item.html_url} target="_blank">
          VER NO GITHUB
          <FaArrowUpRightFromSquare />
        </a>
      </S.IssuesInfoHeader>

      <S.IssuesInfoContent>
        <p>{item.title}</p>

        <div className="iconsContainer">

          <S.IssuesInfoIcon>
            <FaGithub size={16} />
            <span>{item.user.login}</span>
          </S.IssuesInfoIcon>

          {item?.updated_at && (
            <S.IssuesInfoIcon>
              <FaCalendarDay size={16} />
              <span>{formatDistanceToNow(item?.updated_at, { addSuffix: true, locale: ptBR })}</span>
            </S.IssuesInfoIcon>
          )}

          <S.IssuesInfoIcon>
            <IoChatbubble size={16} />
            <span>{item.comments} comentários</span>
          </S.IssuesInfoIcon>
        </div>

      </S.IssuesInfoContent>
    </S.IssuesInfoContainer>
  )
}