import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { MdEmail } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

//Componentes
import Menu from '../../layouts/Menu/input';
import Input from '../../components/Input/input';
import SubmitButton from '../../components/SubmitButton/index';

import * as action from '../../store/modules/auth/actions';

export default function index() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(
    useSelector((state) => state.auth.authReducer.user),
  );

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
      console.log(error);
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
                  <FaRegUser /> Nome
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
                  <MdEmail /> E-mail
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
                  <FaLock /> Senha
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
    </Container>
  );
}
