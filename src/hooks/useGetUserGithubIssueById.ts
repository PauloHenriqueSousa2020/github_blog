import GithubService from "@/services/GithubService";
import { useCallback, useEffect, useState } from "react";

interface userGithubIssueByIdProps {
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

export function useGetUserGithubIssueById({ id }: { id: number }) {
  const [userGithubIssue, setUserGithubIssue] = useState<userGithubIssueByIdProps>({
    id: 0,
    body: "",
    updated_at: "",
    title: "",
    html_url: "",
    comments: 0,
    user: {
      login: ""
    }
  });

  const getUserGithubIssues = useCallback(async () => {
    try {
      const data = await GithubService.getUserGithubIssueById({ id })
      setUserGithubIssue(data);
    } catch (error) {
      console.log(error)
    }
  }, [id]);

  useEffect(() => {
    getUserGithubIssues()
  }, [getUserGithubIssues]);

  return {
    userGithubIssue
  }
}