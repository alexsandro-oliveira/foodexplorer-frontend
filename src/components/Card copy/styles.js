import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;

  .dish {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    position: relative;

    .favorite {
      position: absolute;
      top: -1rem;
      right: 4rem;
    }

    > img {
      width: 80px;
      height: 80px;
    }

    > p {
      font-size: 1.4rem;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      /* ------  rever -----*/
      display: none;
    }
    .price {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1.4rem;
    }

    .btn-add {
      width: 100%;
      margin-top: 1.6rem;

      & button {
        height: 3.2rem;
      }
    }
  }

  .name-dish {
    display: flex;
    align-items: center;
    gap: 0;

    > h3 {
      font-size: 1.2rem;
    }

    > svg {
      font-size: 1.3rem;
    }
  }
`;
