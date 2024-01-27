import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4rem 1.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > h2 {
    font-size: clamp(0.7rem, 0.7rem + 0.7vw, 2.5rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: clamp(1.2rem, 1.2rem + 0.943vw, 2.8rem);

    margin-right: 0.3rem;
    filter: grayscale(1);
  }

  > h1 {
    font-size: clamp(1.2rem, 1rem + 0.943vw, 2.8rem);

    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`;
