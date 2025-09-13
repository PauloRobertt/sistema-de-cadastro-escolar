import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from '../../service/axios';

//Estillos
import { Container, ContainerConteudo } from '../../styles/GlobalStyles';
import {
  ButtonDeleteUser,
  DadosUsuario,
  ContainerInput,
  ContainerDeleteUser,
  ContainerUsuario,
} from './styled';

//Icons
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { MdLockOutline } from 'react-icons/md';

//Componentes
import Menu from '../../layouts/Menu/input';
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton/index';

import * as action from '../../store/modules/auth/actions';
import { ErrorColor, primaryColor } from '../../config/colors';

export default function index() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(
    useSelector((state) => state.auth.authReducer.user),
  );

  const usuarioLogado = () => {
    toast.success('Usuario logado!', {
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
    if (location.state?.functionToast) {
      usuarioLogado();
      navigate('.', { replace: true, state: {} });
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      action.editRequest({
        email: user.userEmail,
        nome: user.userNome,
        password: user.password || undefined,
      }),
    );
  };

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.delete('/users/');
      dispatch(action.loginError());
    } catch (error) {
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
  };

  return (
    <Container>
      <Menu />
      <ContainerConteudo>
        <ContainerUsuario>
          <DadosUsuario>
            <form onSubmit={handleSubmit}>
              <div className="headerForm">
                <div>
                  <h1>Dados do Usuario</h1>
                  <p>
                    Aperte no botão "Editar Dados" caso queira atualizar suas
                    informações!
                  </p>
                </div>
                <SubmitButton
                  variant={'EditUser'}
                  className="buttonEdit"
                  text={
                    <>
                      <MdEdit /> Editar Dados
                    </>
                  }
                  type="submit"
                />
              </div>
              <ContainerInput>
                <label>
                  <FiUser size={'1.3em'} /> Nome
                </label>
                <Input
                  id="userNome"
                  value={user.userNome}
                  label="Nome"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={handleOnChange}
                />
              </ContainerInput>
              <ContainerInput>
                <label>
                  <MdOutlineEmail size={'1.3em'} /> E-mail
                </label>
                <Input
                  id="userEmail"
                  value={user.userEmail}
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
                  placeholder="Digite nova senha"
                  onChange={handleOnChange}
                />
              </ContainerInput>
            </form>
          </DadosUsuario>
          <ContainerDeleteUser>
            <h2>
              <MdDelete /> Zona de Perigo
            </h2>
            <p>Ações irreversíveis relacionadas à sua conta</p>
            <ButtonDeleteUser type="button" onClick={handleDeleteAccount}>
              <MdDelete />
              Excluir Conta
            </ButtonDeleteUser>
          </ContainerDeleteUser>
        </ContainerUsuario>
      </ContainerConteudo>
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
