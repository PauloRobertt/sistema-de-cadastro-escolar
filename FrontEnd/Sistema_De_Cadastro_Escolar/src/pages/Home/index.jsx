// React
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Componentes
import Menu from '../../layouts/Menu/input';
import LinkButton from '../../components/LinkButton';

// Icons
import { IoIosAdd } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';

//Styles
import { Container } from '../../styles/GlobalStyles';
import {
  ContainerHome,
  ContainerSaudacao,
  ContainerCards,
  Cards,
  ContainerDicasDoSistema,
  ContainerAtalhos,
} from './styled';

// Service
import axios from '../../service/axios';

export default function index() {
  const date = new Date();
  const [alunos, setAlunos] = useState([]);

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
    <Container>
      <Menu />
      <ContainerHome>
        <ContainerSaudacao>
          <h1>
            Bem-vindo,{' '}
            {useSelector((state) => state.auth.authReducer.user.userNome)}!
          </h1>
          <p>
            Hoje é {date.getDate()}/{date.getMonth()}/{date.getUTCFullYear()}
          </p>
        </ContainerSaudacao>
        <ContainerCards>
          <Cards>
            <h3>Total de Alunos</h3>
            <h1>{alunos.length}</h1>
          </Cards>
          <Cards>
            <h3>Último aluno Cadastro / Editado</h3>
            {!alunos[0] ? (
              <p>Nenhum aluno cadastrado</p>
            ) : (
              <div>
                <p>{alunos[0].nome + ' ' + alunos[0].sobrenome}</p>
              </div>
            )}
          </Cards>
        </ContainerCards>
        <ContainerDicasDoSistema>
          <h2>Dicas</h2>
          <ul style={{ listStyleType: 'circle' }}>
            <li>
              Clique em "cadastrar novo aluno" para adicionar um estudante.
            </li>
            <li>
              Use "Alunos" no menu lateral para visualizar, editar ou deletar
              alunos existentes
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
  );
}
