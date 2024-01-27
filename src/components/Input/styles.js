import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  margin-bottom: 3.2rem;

  > input {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.5rem;

    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
