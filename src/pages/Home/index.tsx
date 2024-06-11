

import { Profile } from "@/components/Profile";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";

import * as S from "./styles";
import { useGetUserGithubIssues } from "@/hooks/useGetUserGithubIssues";

export function Home() {
  const { userGithubIssues } = useGetUserGithubIssues({ q: "" });

  console.log("userGithubIssues: ", userGithubIssues)
  return (
    <S.HomeContainer>
      <Profile />
      {userGithubIssues.items.length > 0 ? (
        <>
          <S.SearchContainer>
            <div className="header">
              <p>Publicações</p>
              <span>{`${userGithubIssues.total_count} ${userGithubIssues.total_count > 1 ? "publicações" : "publicação"}`}</span>
            </div>
            <Input />
          </S.SearchContainer>

          <S.CardContainer>
            {userGithubIssues.items.map(issue => 
              <Card key={issue.id} item={issue} />
            )}
          </S.CardContainer>
        </>
      ) : (<></>)}

    </S.HomeContainer>
  )
}