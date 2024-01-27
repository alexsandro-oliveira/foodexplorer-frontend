import { BsSearch } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";
import { Container } from "./styles";

export function SideMenu({ menuIsOpen, onCloseMenu, onChange, ...rest }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <header>
        <div onClick={onCloseMenu}>
          <GiKnifeFork />
        </div>
        <h2>Menu</h2>
      </header>

      <div className="input-search">
        <div className="search">
          <BsSearch />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
            {...rest}
          />
        </div>
        <div className="btn-menu">
          <ButtonText title="Sair" />
        </div>
      </div>

      <Footer />
    </Container>
  );
}
