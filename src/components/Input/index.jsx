import { Container } from "./styles";

export function Input({
  icon: Icon,
  type,
  label,
  placeholder,
  value,
  ...rest
}) {
  return (
    <Container>
      {label}
      {Icon && <Icon size={20} />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Container>
  );
}
