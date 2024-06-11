import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled(Link)`
  background-color: ${({ theme }) => theme.colors.basePost};
  border-radius: 10px;
  width: 26rem;
  padding: 1.5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.baseBorder};
  }
`

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  label {
    flex: 1;
    color: ${({ theme }) => theme.colors.baseTitle};
    font-size: 1.25rem;
    font-weight: bold;
  }

  span {
    color: ${({ theme }) => theme.colors.baseSpan};
    font-size: 0.75rem;
  }
`

export const CardDescription = styled.div`
  margin-top: 1rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.baseText};

  .markdown {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`