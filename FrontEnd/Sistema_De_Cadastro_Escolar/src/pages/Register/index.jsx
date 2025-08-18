import {
  Background,
  RegisterWrapper,
  RegisterFormWrapper,
  RegisterContent,
  RegisterImage,
} from './styled';
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';

export default function index() {
  return (
    <Background>
      <RegisterWrapper>
        <RegisterContent>
          <RegisterImage />
          <RegisterFormWrapper>
            <h1>Crie sua conta</h1>
            <form action="" method="post">
              <Input
                id="name"
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
                minLength={3}
                maxLength={100}
              />
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
              <SubmitButton text="Registrar" />
            </form>
            <p>
              Já tem uma conta? <LinkButton path="/login" text="Entre" />
            </p>
          </RegisterFormWrapper>
        </RegisterContent>
      </RegisterWrapper>
    </Background>
  );
}
