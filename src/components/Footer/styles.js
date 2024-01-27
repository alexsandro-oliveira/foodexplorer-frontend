import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  width: 100%;
  height: 7.7rem;
  padding: 4rem 1.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0 auto;

  > div:last-child {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    gap: 0.5rem;

    > h2 {
      font-size: clamp(1.1rem, 2.6vw, 1.4rem);
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      font-weight: 400;
    }

    > a {
      display: flex;
      align-items: center;
      padding-bottom: 0.3rem;

      > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        font-size: 1.6rem;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 0.5vw, 1rem);

  > img {
    width: clamp(2rem, 3vw, 3rem);
    height: clamp(2rem, 3vw, 3rem);

    margin-right: 0.3rem;
    filter: grayscale(1);
  }

  > h1 {
    font-size: clamp(1.6rem, 3vw, 2.8rem);
    white-space: nowrap;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }
`;
