import { FaMinus, FaPlus } from "react-icons/fa6";
import { IconButton } from "../IconButton";
import { Container } from "./styles";

export function Counter({ foods, onFoodsChange }) {
  function handlePlusButton() {
    onFoodsChange(foods + 1);
  }

  function handleMinusButton() {
    if (foods <= 0) {
      return;
    }
    onFoodsChange(foods - 1);
  }

  const formattedFoods = foods < 10 ? `0${foods}` : foods;

  return (
    <Container>
      <IconButton onClick={handlePlusButton} icon={FaMinus} />

      <Number>{formattedFoods}</Number>

      <IconButton onClick={handleMinusButton} icon={FaPlus} />
    </Container>
  );
}
