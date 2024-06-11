import styled from 'styled-components';

export const IssuesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  max-width: 864px;
  width: 100%;
`

export const IssuesInfoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

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

export const IssuesInfoContent = styled.div`
  p {
    color: ${({ theme }) => theme.colors.baseTitle};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }

  .iconsContainer {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
`

export const IssuesInfoIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.baseSpan};
`