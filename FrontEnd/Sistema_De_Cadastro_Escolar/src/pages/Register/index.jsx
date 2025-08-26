import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../service/axios';
import {
  RegisterWrapper,
  RegisterFormWrapper,
  RegisterContent,
  RegisterImage,
} from './styled';
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';
import { Container } from '../../styles/GlobalStyles';

export default function index() {
  const [user, userState] = useState({});
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    register(user);
  };

  async function register(user) {
    try {
      const response = await axios.post('/users/', user);
      navigate('/login');
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  function handleOnChange(e) {
    userState({ ...user, [e.target.id]: e.target.value });
  }

  return (
    <Container>
      <RegisterWrapper>
        <RegisterContent>
          <RegisterImage />
          <RegisterFormWrapper>
            <h1>Crie sua conta</h1>
            <form onSubmit={submit}>
              <Input
                id="nome"
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
                onChange={handleOnChange}
                minLength={3}
                maxLength={100}
              />
              <Input
                id="email"
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={handleOnChange}
                minLength={3}
                maxLength={100}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                onChange={handleOnChange}
                minLength={6}
                maxLength={50}
              />
              <SubmitButton text="Registrar" type="submit" />
            </form>
            <p>
              Já tem uma conta? <LinkButton path="/login" text="Entre" />
            </p>
          </RegisterFormWrapper>
        </RegisterContent>
      </RegisterWrapper>
    </Container>
  );
}
