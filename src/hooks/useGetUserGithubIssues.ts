import GithubService from "@/services/GithubService";
import { useCallback, useEffect, useState } from "react";

interface userGithubIssuesProps {
  total_count: number;
  items: {
    id: number;
    body: string;
    updated_at: string;
    title: string;
    number: number;
  }[]
}
export function useGetUserGithubIssues({ q }: { q: string }) {
  const [userGithubIssues, setUserGithubIssues] = useState<userGithubIssuesProps>({
    total_count: 0,
    items: []
  });
  const [loading, setLoading] = useState(false);

  const getUserGithubIssues = useCallback(async () => {
    try {
      setLoading(true)
      const data = await GithubService.getUserGithubIssues({ q })
      setUserGithubIssues(data);
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [q]);

  useEffect(() => {
    getUserGithubIssues()
  }, [getUserGithubIssues]);

  return {
    userGithubIssues,
    loading
  }
}