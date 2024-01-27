import Icon from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Input } from "../../components/Input";
import { Container, Form, Logo } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={Icon} alt="Logo" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <Input
          type={"email"}
          label={"Email"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
        />
        <Input
          type={"password"}
          label="Senha"
          placeholder={"No mínimo 6 caracteres"}
        />

        <Button title={"Entrar"} />
      </Form>

      <ButtonText title={"Criar uma conta"} />
    </Container>
  );
}
