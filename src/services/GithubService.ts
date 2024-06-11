import { api } from "./api";

const getUserGithub = async ({ userName }: { userName: string }) => {
  const { data } = await api.get(`/users/${userName}`);
  return data;
}

export default {
  getUserGithub
}