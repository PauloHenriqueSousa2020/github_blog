import { api } from "./api";

const getUserGithub = async ({ userName }: { userName: string }) => {
  const { data } = await api.get(`/users/${userName}`);
  return data;
}

const getUserGithubIssues = async ({ q }: { q: string }) => {
  const { data } = await api.get(`/search/issues?q=${q}repo:PauloHenriqueSousa2020/github_blog`);
  return data;
}

export default {
  getUserGithub,
  getUserGithubIssues
}