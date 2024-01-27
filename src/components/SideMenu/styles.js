import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;

  display: grid;
  grid-template-rows: 12.3rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  > header {
    height: 11.4rem;
    display: flex;
    gap: 1.6rem;
    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    & svg {
      font-size: 2.5rem;

      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > h2 {
      font-size: 2.1rem;
    }
  }

  .input-search {
    display: flex;
    flex-direction: column;
    align-items: center;

    .search {
      display: flex;
      align-items: center;

      height: 4.8rem;
      width: 85%;
      margin: 3.6rem 0;
      border-radius: 5px;
      padding: 1.4rem 1.2rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      > svg {
        margin-right: 1.4rem;
      }

      > input {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      input::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-size: 1.2rem;
      }
    }
  }

  .btn-menu {
    width: 85%;
    height: 5.4rem;
    display: flex;

    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    > button {
      align-items: start;
      font-size: 2.4rem;
    }
  }
`;
