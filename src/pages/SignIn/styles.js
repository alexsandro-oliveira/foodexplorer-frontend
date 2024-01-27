import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    margin-top: 3.2rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 7.3rem;

  > img {
    width: 4rem;
    height: 4rem;

    margin-right: 10.74px;
  }

  > h1 {
    font-size: 3.7rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Form = styled.form`
  width: 31.6rem;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;
