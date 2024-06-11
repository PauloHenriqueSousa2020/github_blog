import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  max-width: 864px;
  width: 100%;
  
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;

  p {
    color: ${({ theme }) => theme.colors.baseTitle};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
  }
`

export const ProfileIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.baseSubtitle};
`
