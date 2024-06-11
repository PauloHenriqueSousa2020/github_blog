

import { Profile } from "@/components/Profile";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";

import * as S from "./styles";
import { useGetUserGithubIssues } from "@/hooks/useGetUserGithubIssues";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

export function Home() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const { userGithubIssues, loading } = useGetUserGithubIssues({ q: debouncedSearch });

  if (loading) {
    return <Loading />
  }
  
  return (
    <S.HomeContainer>
      <Profile />
      <S.SearchContainer>
        <div className="header">
          <p>Publicações</p>
          <span>{`${userGithubIssues.total_count} ${userGithubIssues.total_count > 1 ? "publicações" : "publicação"}`}</span>
        </div>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.SearchContainer>

      {userGithubIssues.items.length > 0 ? (
        <>
          <S.CardContainer>
            {userGithubIssues.items.map(issue =>
              <Card key={issue.id} item={issue} />
            )}
          </S.CardContainer>
        </>
      ) : (
        <S.EmptySearch>
          Nenhuma issue encontrada.
        </S.EmptySearch>
      )}

    </S.HomeContainer>
  )
}