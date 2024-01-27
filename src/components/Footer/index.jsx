import Icon from "../../assets/logo.svg";
import { Container, Logo } from "./styles";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={Icon} alt="Logo" />

        <h1>food explorer</h1>
      </Logo>

      <h2>© 2023 - Todos os direitos reservados.</h2>
    </Container>
  );
}
