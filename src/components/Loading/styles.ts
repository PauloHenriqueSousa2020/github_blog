import styled, { keyframes } from "styled-components";


const LoadingAnimation = keyframes`
from {
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${LoadingAnimation} 2.3s linear infinite;
`;

export const Item = styled.div`
  width: 0.35em;
  height: 1em;
  background: ${({ theme }) => theme.colors.blue};
  margin: 1em;
  border-radius: 0.2em;
`;
export const CircularProgressItem = styled.div`
  display: flex;
  font-size: 0.5rem;
  align-items: center;
  justify-content: center;
  position: absolute;

  .leftRight {
    display: flex;
    justify-content: space-between;
    gap: 0.6em;
    position: absolute;

    * {
      transform: rotate(90deg);
    }
    #item1_0deg {
      opacity: 0.7;
    }
    #item2_0deg {
      opacity: 0.3;
    }
    #item2_90deg {
      opacity: 0.5;
    }
  }
  .bottomTop {
    display: flex;
    flex-direction: column;
    #item3_90deg {
      opacity: 0.28;
    }
    #item3_0deg {
      width: 0.23rem;
    }
    #item4_90deg {
      opacity: 0.5;
    }
    #item4_0deg {
      opacity: 0.5;
    }
  }
  transform: rotate(45deg)
`;