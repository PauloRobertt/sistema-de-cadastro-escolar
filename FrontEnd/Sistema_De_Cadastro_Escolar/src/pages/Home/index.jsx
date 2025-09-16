// React
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Componentes
import Menu from '../../layouts/Menu/input';
import LinkButton from '../../components/LinkButton';

// Icons
import { IoIosAdd } from 'react-icons/io';
import { FiUser, FiUserPlus, FiUsers } from 'react-icons/fi';
import { FaPhotoVideo, FaArrowRight } from 'react-icons/fa';

//Styles
import { Container } from '../../styles/GlobalStyles';
import {
  ContainerHome,
  ContainerSaudacao,
  ContainerCards,
  Cards,
  ContainerDicasDoSistema,
  ContainerAtalhos,
  ContainerHomeNaoLogado,
} from './styled';

// Service
import axios from '../../service/axios';

export default function index() {
  const date = new Date();
  const [alunos, setAlunos] = useState([]);

  const usuarioLogado = useSelector(
    (state) => state.auth.authReducer.isLoggedIn,
  );

  useEffect(() => {
    async function getAlunos() {
      try {
        const response = await axios.get('/alunos');
        setAlunos(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAlunos();
  }, []);

  return (
    <>
      {usuarioLogado ? (
        <Container>
          <Menu />
          <ContainerHome>
            <ContainerSaudacao>
              <h1>
                Bem-vindo,{' '}
                {useSelector((state) => state.auth.authReducer.user.userNome)}!
              </h1>
              <p>
                Hoje é {date.getDate()}/{date.getMonth()}/
                {date.getUTCFullYear()}
              </p>
            </ContainerSaudacao>
            <ContainerCards>
              <Cards>
                <FiUsers size={'1.5em'} />
                <div>
                  <h3>Total de Alunos</h3>
                  <p>{alunos.length}</p>
                </div>
              </Cards>
              <Cards>
                <FiUser size={'1.5em'} />
                <div>
                  <h3>Último aluno Cadastro / Editado</h3>
                  {!alunos[0] ? (
                    <p>Nenhum aluno cadastrado</p>
                  ) : (
                    <div>
                      <p>{alunos[0].nome + ' ' + alunos[0].sobrenome}</p>
                    </div>
                  )}
                </div>
              </Cards>
            </ContainerCards>
            <ContainerDicasDoSistema>
              <h2>Dicas</h2>
              <ul style={{ listStyleType: 'circle' }}>
                <li>
                  Clique em "cadastrar novo aluno" para adicionar um estudante.
                </li>
                <li>
                  Use "Alunos" no menu lateral para visualizar, editar ou
                  deletar alunos existentes
                </li>
                <li>
                  Utilize a seção "Usuario" no menu lateral caso queira
                  modificar suas informações!
                </li>
              </ul>
            </ContainerDicasDoSistema>
            <ContainerAtalhos>
              <h2>Ações Rápidas</h2>
              <p>Acesso rápido às principais funcionalidades do sistema</p>
              <div>
                <LinkButton
                  variant={'adicionarAluno'}
                  path={'/alunos'}
                  text={
                    <>
                      <FiUserPlus size={'1.3em'} /> Cadastrar Novo Aluno
                    </>
                  }
                />
              </div>
            </ContainerAtalhos>
          </ContainerHome>
        </Container>
      ) : (
        <Container>
          <Menu />
          <ContainerHomeNaoLogado>
            <div className="header">
              <h1>Sistema de Cadastro Escolar</h1>
              <p>
                Uma plataform para gerenciamento de alunos de forma simples e
                eficiente.
              </p>
              <div className="buttonAcessarSistema">
                <LinkButton
                  variant={'adicionarAluno'}
                  path={'/alunos'}
                  text={
                    <>
                      Acessar Sistema <FaArrowRight size={'1em'} />
                    </>
                  }
                />
              </div>
            </div>
            <div className="funcionalidades">
              <div className="header">
                <h2>Funcionalidades Principais</h2>
                <p>
                  Tudo que você precisa para uma gestão educacional completa e
                  eficiente
                </p>
              </div>
              <div className="cardsFuncionalidades">
                <div className="cardFuncionalidade">
                  <div>
                    <FiUsers size={'3em'} />
                  </div>
                  <h3>Gestão de Alunos</h3>
                  <p>Cadastro completo de alunos e informações pessoais</p>
                </div>
                <div className="cardFuncionalidade">
                  <div>
                    <FaPhotoVideo size={'3em'} />
                  </div>
                  <h3>Upload de Fotos dos alunos</h3>
                  <p>Cadastro de fotos de alunos</p>
                </div>
              </div>
            </div>
          </ContainerHomeNaoLogado>
        </Container>
      )}
    </>
  );
}
