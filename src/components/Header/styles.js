import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.6rem 2rem 2.4rem;

  .hidden {
    display: none;
  }

  .input-search {
    display: flex;
    align-items: center;
    position: relative;

    > input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      border: none;
      width: 100%;
      height: 4.8rem;
      padding-left: 5rem;
      border-radius: 0.5rem;
    }

    input::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 1.6rem;
    }

    > svg {
      width: 2.25rem;
      height: 2.25rem;
      position: absolute;

      fill: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin: 1.4rem;
    }
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 2.5rem;

    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: clamp(2.4rem, 0.875rem + 2.17vw, 3rem);

    margin-right: 10.74px;
  }

  .role {
    display: flex;
    flex-direction: column;

    > h1 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > span {
      align-self: flex-end;

      font-size: 1.2rem;
      line-height: 160%;
      margin-top: -8px;

      display: none;

      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }
`;

export const Order = styled.div`
  background: none;
  border: none;
  display: flex;

  .order {
    width: 216px;
    margin-left: 32px;
    display: none;
  }

  > svg {
    font-size: 3rem;
  }
`;

export const Logout = styled.button`
  .hidden {
    display: none;
  }
`;
