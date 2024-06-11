import GithubService from "@/services/GithubService";
import { useCallback, useEffect, useState } from "react";

interface userGithubProps {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  bio: string;
  html_url: string;
  company?: string;
}
export function useGetUserGithub({ userName }: { userName: string }) {
  const [userGithub, setUserGithub] = useState<userGithubProps>({
    avatar_url: "",
    name: "",
    login: "",
    followers: 0,
    bio: "",
    html_url: ""
  });

  const getUserGithub = useCallback(async () => {
    try {
      const data = await GithubService.getUserGithub({ userName })
      setUserGithub(data);
    } catch (error) {
      console.log(error)
    }
  }, [userName]);

  useEffect(() => {
    getUserGithub()
  }, [getUserGithub]);

  return {
    userGithub
  }
}