import { useEffect, useState } from 'react';
import axios from '../../service/axios';

import { ContainerAlunos, TableAlunos } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Menu from '../../layouts/Menu/input';
import LinkButton from '../../components/LinkButton';

import { FaUserCircle } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';
import { FaUserMinus } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';

export default function AlunosPage() {
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
      <ContainerAlunos>
        <h2>Alunos</h2>
        <button>
          <IoIosAdd fontSize={'1.5em'} /> Adicionar novo aluno
        </button>
        <TableAlunos>
          <thead>
            <tr>
              <th id="pictureProfile">Foto</th>
              <th id="name">Nome</th>
              <th id="email">E-mail</th>
              <th id="age">Idade</th>
              <th id="op">Editar</th>
              <th id="op">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {alunos.length > 0 ? (
              alunos.map((aluno) => (
                <tr key={String(aluno.id)}>
                  <td id="pictureProfile">
                    {aluno.Photos.length > 0 ? (
                      <img
                        crossOrigin="anonymous"
                        src={aluno.Photos[0].url}
                        alt="Foto de aluno"
                      />
                    ) : (
                      <FaUserCircle size={'2em'} />
                    )}
                  </td>
                  <td id="name">{aluno.nome}</td>
                  <td id="email">{aluno.email}</td>
                  <td id="age">{aluno.idade}</td>
                  <td id="op">
                    <div>
                      <LinkButton
                        variant={'tableOp'}
                        path={''}
                        text={<FaUserEdit />}
                      />
                    </div>
                  </td>
                  <td id="op">
                    <div>
                      <FaUserMinus />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <h3>Nenhum aluno encontrado!</h3>
                </td>
              </tr>
            )}
          </tbody>
        </TableAlunos>
      </ContainerAlunos>
    </Container>
  );
}
