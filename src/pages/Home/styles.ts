import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 54rem;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: -8rem;
`


export const SearchContainer = styled.div`
  margin-top: 4rem;
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    p {
      color: ${({ theme }) => theme.colors.baseSubtitle};
      font-size: 1.125rem;
      font-weight: bold;
    }

    span {
      color: ${({ theme }) => theme.colors.baseSpan};
      font-size: 0.875rem;
    }
  }
`

export const CardContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`