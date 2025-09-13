import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

//Styled-Componentes
import {
  RegisterWrapper,
  RegisterFormWrapper,
  RegisterContent,
  RegisterImage,
  ContainerInput,
} from './styled';

//Componentes
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';
import { Container } from '../../styles/GlobalStyles';

import axios from '../../service/axios';
import { ErrorColor } from '../../config/colors';

export default function index() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    register(user);
  };

  async function register(user) {
    try {
      const response = await axios.post('/users/', user);
      navigate('/login', { state: { usuarioRegistradoToast: true } });
      return response;
    } catch (error) {
      console.log(error.response.data.errors);
      error.response.data.errors.map((erro) => {
        toast.error(erro, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          style: { backgroundColor: ErrorColor },
        });
      });
    }
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  return (
    <Container>
      <RegisterWrapper>
        <RegisterContent>
          <RegisterImage />
          <RegisterFormWrapper>
            <h1>Crie sua conta</h1>
            <form onSubmit={submit}>
              <ContainerInput>
                <label>Nome</label>
                <Input
                  id="nome"
                  label="Nome"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={handleOnChange}
                />
              </ContainerInput>
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
              <SubmitButton text="Registrar" type="submit" />
            </form>
            <p>
              Já tem uma conta? <LinkButton path="/login" text="Entre" />
            </p>
          </RegisterFormWrapper>
        </RegisterContent>
      </RegisterWrapper>
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
