import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

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

//Icons
import { MdOutlineEmail } from 'react-icons/md';
import { MdLockOutline } from 'react-icons/md';

//Actions
import { loginRequest } from '../../store/modules/auth/actions';
import { primaryColor } from '../../config/colors';

export default function index() {
  const [user, setUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const prevPath = location.state || '/';

  const functionToast = () => {
    toast.success('Usuario registrado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: { backgroundColor: primaryColor },
    });
  };

  useEffect(() => {
    if (location.state?.usuarioRegistradoToast) {
      functionToast();
      navigate('.', { replace: true, state: {} });
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                <label>
                  <MdOutlineEmail size={'1.3em'} /> E-mail
                </label>
                <Input
                  id="email"
                  label="E-mail"
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={handleOnChange}
                />
              </ContainerInput>
              <ContainerInput>
                <label>
                  <MdLockOutline size={'1.3em'} /> Senha
                </label>
                <Input
                  id="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={handleOnChange}
                />
              </ContainerInput>
              <LinkButton path="" text={'Esqueceu sua senha?'} />
              <SubmitButton type="submit" text="Entrar" />
            </form>
            <p>
              Não tem uma conta?
              <LinkButton path="/register" text=" Cadastre-se" />
            </p>
          </LoginFormWrapper>
        </LoginContent>
        <LoginImage />
      </LoginWrapper>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}
