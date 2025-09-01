import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Styled-Components
import {
  LoginWrapper,
  LoginFormWrapper,
  LoginContent,
  LoginImage,
  ContainerInput,
} from './styled';

//Componentes
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';
import { Container } from '../../styles/GlobalStyles';

//Actions
import { loginRequest } from '../../store/modules/auth/actions';

export default function index() {
  const [user, setUser] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();

  const prevPath = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ email: 'Teste@hotmail.com', password: 'Senha123' });
    dispatch(
      loginRequest({
        email: user.email,
        password: user.password,
        prevPath,
      }),
    );
  };

  function handleOnChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  return (
    <Container>
      <LoginWrapper>
        <LoginContent>
          <LoginFormWrapper>
            <h1>Bem-Vindo</h1>
            <h3>Digite seu e-mail e senha para acessar sua conta.</h3>
            <form onSubmit={handleSubmit} method="post">
              <ContainerInput>
                <label>E-mail</label>
                <Input
                  id="email"
                  label="E-mail"
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={handleOnChange}
                />
              </ContainerInput>
              <ContainerInput>
                <label>Senha</label>
                <Input
                  id="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={handleOnChange}
                />
              </ContainerInput>
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
