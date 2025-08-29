// React
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Componentes
import Menu from '../../layouts/Menu/input';
import LinkButton from '../../components/LinkButton';

// Icons
import { IoIosAdd } from 'react-icons/io';

//Styles
import { Container } from '../../styles/GlobalStyles';
import {
  ContainerHome,
  ContainerSaudacao,
  ContainerCards,
  Cards,
} from './styled';

// Service
import axios from '../../service/axios';
import { OrganizarImagens } from '../../assets';

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
          <h3>
            Hoje é {date.getDate()}/{date.getMonth()}/{date.getUTCFullYear()}
          </h3>
        </ContainerSaudacao>
        <ContainerCards>
          <div>
            <Cards>
              <LinkButton
                path={''}
                text={
                  <>
                    <IoIosAdd fontSize={'1.5em'} /> Adicionar novo aluno
                  </>
                }
                variant={'adicionarAluno'}
              />
            </Cards>
            <Cards>
              <h3>Dicas</h3>
              <ul>
                <li>
                  Clique em "cadastrar novo aluno" para adicionar um estudante.
                </li>
                <li>
                  Use "Alunos" no menu lateral para visualizar, editar ou
                  deletar alunos existentes
                </li>
              </ul>
            </Cards>
          </div>
          <div>
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
          </div>
        </ContainerCards>
      </ContainerHome>
    </Container>
  );
}
