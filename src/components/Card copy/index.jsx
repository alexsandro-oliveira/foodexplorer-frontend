import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Dish from "../../assets/Mask group.png";
import { Counter } from "../../components/Counter";
import { Button } from "../Button";
import { Container } from "./styles";

export function Card({ data, ...rest }) {
  const [favorite, setFavorite] = useState();

  return (
    <Container {...rest}>
      <div className="dish">
        <div className="favorite" onClick={setFavorite}>
          <FaRegHeart size={20} />
        </div>
        <img src={Dish} alt="foto do prato" />
        <div className="name-dish">
          <h2>Salada Ravanello</h2>
          <IoIosArrowForward />
        </div>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
        <div className="price">
          <span>R$ 49,97</span>
        </div>
        <Counter />
        <div className="btn-add">
          <Button title="incluir" />
        </div>
      </div>
    </Container>
  );
}
