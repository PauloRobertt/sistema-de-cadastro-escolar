import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../service/axios';
import {
  LoginWrapper,
  LoginFormWrapper,
  LoginContent,
  LoginImage,
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
    login(user);
  };

  async function login(user) {
    try {
      const response = await axios.post('/tokens/', user);
      console.log('Logado');
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
      <LoginWrapper>
        <LoginContent>
          <LoginFormWrapper>
            <h1>Bem-Vindo</h1>
            <h3>Digite seu e-mail e senha para acessar sua conta.</h3>
            <form onSubmit={submit} method="post">
              <Input
                id="email"
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={handleOnChange}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                onChange={handleOnChange}
              />
              <LinkButton path="" text={'Esqueceu sua senha?'} />
              <SubmitButton type="submit" text="Login" />
            </form>
            <p>
              Não tem uma conta?
              <LinkButton path="/register" text=" Cadastre-se" />
            </p>
          </LoginFormWrapper>
        </LoginContent>
        <LoginImage />
      </LoginWrapper>
    </Container>
  );
}
