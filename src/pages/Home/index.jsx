import { useState } from "react";
import Logo from "../../assets/macarronsBrand.png";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SideMenu } from "../../components/SideMenu";
import { Brand, Container, Content } from "./styles";

export function Home() {
  const [menuIsOpen, setMeuIsOpen] = useState(false);

  return (
    <Container>
      <Header onOpenMenu={() => setMeuIsOpen(true)} />
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMeuIsOpen(false)}
      />

      <Brand>
        <img
          src={Logo}
          alt="imagem macarons caindo junto de algumas frutas vermelhas"
        />
        <div className="texts">
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Brand>

      <Content>
        <Section title="Refeições">
          <Card />
        </Section>
      </Content>
      <Footer />
    </Container>
  );
}
