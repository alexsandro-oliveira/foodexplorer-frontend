import { FaLinkedin } from "react-icons/fa";
import Icon from "../../assets/logo.svg";
import { Container, Content, Logo } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={Icon} alt="Logo" />
          <h1>food explorer</h1>
        </Logo>

        <div>
          <h2>© 2023 - Todos os direitos reservados.</h2>
          <a
            target="_black"
            href="https://www.linkedin.com/in/alexs-oliveiraSantos/"
          >
            <FaLinkedin />
          </a>
        </div>
      </Content>
    </Container>
  );
}
