import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;

  height: 4.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  font-weight: 700;

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`;
