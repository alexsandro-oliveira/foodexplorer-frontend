import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    margin-bottom: 2.4re;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
