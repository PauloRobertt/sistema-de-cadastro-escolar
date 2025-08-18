import {
  Background,
  LoginWrapper,
  LoginFormWrapper,
  LoginContent,
  LoginImage,
} from './styled';
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';

export default function index() {
  return (
    <Background>
      <LoginWrapper>
        <LoginContent>
          <LoginFormWrapper>
            <h1>Bem-Vindo</h1>
            <h3>Digite seu e-mail e senha para acessar sua conta.</h3>
            <form action="" method="post">
              <Input
                id="email"
                label="E-mail"
                type="email"
                placeholder="Digite seu e-mail"
                minLength={3}
                maxLength={100}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                minLength={6}
                maxLength={50}
              />
              <p>Esqueceu sua senha?</p>
              <SubmitButton text="Login" />
            </form>
            <p>
              Não tem uma conta?{' '}
              <LinkButton path="/register" text="Cadastre-se" />
            </p>
          </LoginFormWrapper>
        </LoginContent>
        <LoginImage />
      </LoginWrapper>
    </Background>
  );
}
