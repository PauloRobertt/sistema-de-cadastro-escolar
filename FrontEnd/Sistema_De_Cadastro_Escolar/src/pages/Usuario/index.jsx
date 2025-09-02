import { useSelector } from 'react-redux';

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

export default function index() {
  return (
    <Container>
      <Menu />
      <ContainerConteudo>
        <ContainerUsuario>
          <DadosUsuario>
            <form>
              <div className="headerForm">
                <div>
                  <h1>Dados do Usuario: </h1>
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
                  id="nome"
                  value={useSelector(
                    (state) => state.auth.authReducer.user.userNome,
                  )}
                  label="Nome"
                  type="text"
                  placeholder="Digite seu nome"
                />
              </ContainerInput>
              <ContainerInput>
                <label>
                  <MdEmail /> E-mail
                </label>
                <Input
                  id="email"
                  value={useSelector(
                    (state) => state.auth.authReducer.user.userEmail,
                  )}
                  label="E-mail"
                  type="email"
                  placeholder="Digite seu e-mail"
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
                />
              </ContainerInput>
            </form>
          </DadosUsuario>
          <ContainerDeleteUser>
            <h2>
              <MdDelete /> Zona de Perigo
            </h2>
            <p>Ações irreversíveis relacionadas à sua conta</p>
            <ButtonDeleteUser>
              <MdDelete />
              Excluir Conta
            </ButtonDeleteUser>
          </ContainerDeleteUser>
        </ContainerUsuario>
      </ContainerConteudo>
    </Container>
  );
}
