import Icon from "../../assets/logo.svg";
//import { useAuth } from '../../hooks/auth'
import { Container } from "./styles";

export function Logo({ onClick, onFooter }) {
  return (
    <Container onClick={onClick}>
      <img src={Icon} alt="Logo Food Explorer" width={43} height={43} />
      <div>
        <h2>food explorer</h2>
      </div>
    </Container>
  );
}
