import { useState } from 'react';
import { ContainerInput, DivInput, InputButton } from './styled';
import { FaLock } from 'react-icons/fa';
import { FaLockOpen } from 'react-icons/fa';

export default function Input({
  id,
  label,
  type,
  placeholder,
  onChange,
  minLength,
  maxLength,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState(type);

  function handleShowPassword() {
    if (input === 'email') {
      setInput('email');
    } else if (!showPassword) {
      setShowPassword(true);
      setInput('text');
    } else {
      setShowPassword(false);
      setInput('password');
    }
  }

  return (
    <ContainerInput>
      <label>{label}</label>
      <DivInput>
        <input
          id={id}
          type={input}
          placeholder={placeholder}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
        />
        <InputButton showbutton={id} onClick={handleShowPassword} type="button">
          {showPassword ? <FaLockOpen /> : <FaLock />}
        </InputButton>
      </DivInput>
    </ContainerInput>
  );
}
