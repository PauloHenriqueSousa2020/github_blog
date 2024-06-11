import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.baseInput};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.baseBorder};
  color: ${({ theme }) => theme.colors.baseSubtitle};

  &::placeholder {
    color: ${({ theme }) => theme.colors.baseLabel};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.blue};
  }
`