import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 12.3rem 20rem auto 7.7rem;
  grid-template-areas:
    "header"
    "brand"
    "content"
    "footer";
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;

  margin: 4.4rem 1.6rem auto 3rem;
  width: 87%;
  height: clamp(12rem, 0.7rem + 1.8vw, 26rem);

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 0.8rem;

  > img {
    position: absolute;
    left: -3rem;
    bottom: 0;

    width: clamp(17.1rem, 1rem + 1vw, 63.2rem);
    height: clamp(13.9rem, 1rem + 1vw, 40.6rem);
  }

  .texts {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 1rem;

    > h1 {
      font-size: clamp(0.8rem, 0.7rem + 1.8vw, 4rem);
      font-weight: 600;
      line-height: 140%;
      font-family: "Poppins", sans-serif;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > p {
      font-size: clamp(0.8rem, 0.7rem + 0.5vw, 1.6rem);
      font-weight: 400;
      line-height: 140%;
      font-family: "Poppins", sans-serif;
    }
  }
`;

export const Content = styled.div`
  grid-area: content;
  margin-left: 3rem;

  overflow-y: visible;

  & Section {
    display: flex;
    gap: 10px;
  }
`;
