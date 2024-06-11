import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import * as S from "./styles";
import { useGetUserGithub } from "@/hooks/useGetUserGithub";

export function Profile() {
  const { userGithub } = useGetUserGithub({ userName: "PauloHenriqueSousa2020" });

  console.log(userGithub);

  return (
    <S.ProfileContainer>
      <img src={userGithub.avatar_url} />
      <div>
        <S.ProfileHeader>
          <p>{userGithub.name}</p>
          <a href={userGithub.html_url} target="_blank">
            GITHUB
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </S.ProfileHeader>
        <p>
          {userGithub.bio}
        </p>
        <S.ProfileIconsContainer>
          <S.ProfileIcon>
            <FaGithub size={16} />
            <span>{userGithub.login}</span>
          </S.ProfileIcon>
          {userGithub.company && (
            <S.ProfileIcon>
              <FaGithub size={16} />
              <span>{userGithub.company}</span>
            </S.ProfileIcon>
          )}
          <S.ProfileIcon>
            <FaGithub size={16} />
            <span>{userGithub.followers} seguidores</span>
          </S.ProfileIcon>
        </S.ProfileIconsContainer>
      </div>
    </S.ProfileContainer>
  )
}