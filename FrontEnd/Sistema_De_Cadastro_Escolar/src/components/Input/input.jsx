import { useState } from 'react';

//Componentes
import { ContainerInput, InputButton } from './styled';

//Icons
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoEyeOffOutline } from 'react-icons/io5';

export default function Input({
  id,
  type,
  placeholder,
  value,
  onChange,
  minNumber,
  maxNumber,
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
      <input
        id={id}
        type={input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        min={minNumber}
        max={maxNumber}
      />
      <InputButton showbutton={id} onClick={handleShowPassword} type="button">
        {showPassword ? (
          <MdOutlineRemoveRedEye size={'1.3em'} />
        ) : (
          <IoEyeOffOutline size={'1.3em'} />
        )}
      </InputButton>
    </ContainerInput>
  );
}
