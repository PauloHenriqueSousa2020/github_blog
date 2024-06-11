import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { IssuesInfo } from "@/components/IssuesInfo";

import * as S from "./styles";
import { useGetUserGithubIssueById } from '@/hooks/useGetUserGithubIssueById';
import { Loading } from '@/components/Loading';

export function Issues() {
  const { id } = useParams();
  const { userGithubIssue, loading } = useGetUserGithubIssueById({ id: +id! })

  if (loading) {
    return <Loading />
  }
  
  return (
    <S.IssuesContainer>
      <IssuesInfo item={userGithubIssue} />

      <ReactMarkdown className='reactMarkdown'>
        {userGithubIssue.body}
      </ReactMarkdown>
    </S.IssuesContainer>
  )
}