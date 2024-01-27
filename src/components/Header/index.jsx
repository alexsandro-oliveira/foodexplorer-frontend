import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiReceiptThin, PiSignOut } from "react-icons/pi";
import Icon from "../../assets/logo.svg";
import { Button } from "../Button";
import { Container, Logo, Logout, Menu, Order, Wrapper } from "./styles";

export function Header({ onChange, onOpenMenu, ...rest }) {
  return (
    <Container>
      <Wrapper>
        <Menu onClick={onOpenMenu}>
          <GiHamburgerMenu />
        </Menu>

        <Logo>
          <img src={Icon} alt="Logo" />

          <div className="role">
            <h1>food explorer</h1>
            <span>admin</span>
          </div>
        </Logo>

        <div className="input-search">
          <BsSearch className="hidden" />
          <input
            className="hidden"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
            {...rest}
          />
        </div>

        <Order>
          <Button className="order" title="Pedidos" />
          <PiReceiptThin />
        </Order>
        <Logout className="hidden">
          <PiSignOut size={40} />
        </Logout>
      </Wrapper>
    </Container>
  );
}
