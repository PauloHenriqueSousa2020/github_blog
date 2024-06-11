import { api } from "./api";

const getUserGithub = async ({ userName }: { userName: string }) => {
  const { data } = await api.get(`/users/${userName}`);
  return data;
}

const getUserGithubIssues = async ({ q }: { q: string }) => {
  const { data } = await api.get(`/search/issues?q=${q}repo:PauloHenriqueSousa2020/github_blog`);
  return data;
}
const getUserGithubIssueById = async ({ id }: { id: number }) => {
  const { data } = await api.get(`/repos/PauloHenriqueSousa2020/github_blog/issues/${id}`);
  return data;
}

export default {
  getUserGithub,
  getUserGithubIssues,
  getUserGithubIssueById
}