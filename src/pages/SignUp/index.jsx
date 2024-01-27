import Icon from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Input } from "../../components/Input";
import { Container, Form, Logo } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={Icon} alt="Logo" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <Input
          type={"text"}
          placeholder={"Exemplo: Maria da Silva"}
          label={"Seu nome"}
        />
        <Input
          type={"email"}
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
          label={"Email"}
        />
        <Input
          type={"password"}
          placeholder={"No mínimo 6 caracteres"}
          label={"Senha"}
        />

        <Button title={"Criar conta"} />
      </Form>

      <ButtonText title={"Já tenho uma conta"} />
    </Container>
  );
}
