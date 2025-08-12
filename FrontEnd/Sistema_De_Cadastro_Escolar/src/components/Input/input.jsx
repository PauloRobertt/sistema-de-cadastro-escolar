import { ContainerInput } from './styled';

export default function Input({
  label,
  type,
  placeholder,
  minLength,
  maxLength,
}) {
  return (
    <ContainerInput>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    </ContainerInput>
  );
}
