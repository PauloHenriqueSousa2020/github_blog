import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { IssuesInfo } from "@/components/IssuesInfo";

import * as S from "./styles";
import { useGetUserGithubIssueById } from '@/hooks/useGetUserGithubIssueById';

export function Issues() {
  const { id } = useParams();
  const { userGithubIssue } = useGetUserGithubIssueById({ id: +id! })

  return (
    <S.IssuesContainer>
      <IssuesInfo item={userGithubIssue} />

      <ReactMarkdown className='reactMarkdown'>
        {userGithubIssue.body}
      </ReactMarkdown>
    </S.IssuesContainer>
  )
}