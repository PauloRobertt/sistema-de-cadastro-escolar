import { useState } from 'react';

//Componentes
import { ContainerInput, InputButton } from './styled';

//Icons
import { FaLock } from 'react-icons/fa';
import { FaLockOpen } from 'react-icons/fa';

export default function Input({ id, type, placeholder, value, onChange }) {
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
      <input
        id={id}
        type={input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <InputButton showbutton={id} onClick={handleShowPassword} type="button">
        {showPassword ? <FaLockOpen /> : <FaLock />}
      </InputButton>
    </ContainerInput>
  );
}
