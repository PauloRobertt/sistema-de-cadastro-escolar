import { useEffect, useState } from 'react';
import axios from '../../service/axios';

//Estilos
import {
  TableAlunos,
  HeaderContainer,
  ContainerAluno,
  ContainerInput,
} from './styled';
import { Container, ContainerConteudo } from '../../styles/GlobalStyles';

//Componentes
import Menu from '../../layouts/Menu/input';
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';
import Input from '../../components/Input/input';

//Icons
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
      <ContainerConteudo>
        <HeaderContainer>
          <h1>Alunos</h1>
          <SubmitButton
            text={
              <>
                <IoIosAdd fontSize={'1.5em'} /> Adicionar novo aluno
              </>
            }
            type={'button'}
            variant={'secondary'}
          />
        </HeaderContainer>
        {alunos.length > 0 ? (
          <div>
            <ContainerAluno>
              <div className="container">
                <div className="conteudo">
                  <div className="Foto"></div>
                  <div className="Nome">
                    <h3>Nome Sobrenome</h3>
                    <p>Email@email.com</p>
                  </div>
                  <div className="containerInputs">
                    <ContainerInput>
                      <label>Nome</label>
                      <div className="inputs">
                        <Input
                          id="nome"
                          type="text"
                          placeholder="Digite o nome do aluno"
                        />
                        <Input
                          id="sobrenome"
                          type="text"
                          placeholder="Digite o sobrenome do aluno"
                        />
                      </div>
                    </ContainerInput>
                    <ContainerInput>
                      <label>E-mail</label>
                      <div className="inputs">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Digite o e-mail do aluno ou responsavel"
                        />
                      </div>
                    </ContainerInput>
                    <ContainerInput>
                      <label>Idade</label>
                      <div className="inputs">
                        <Input
                          id="idade"
                          type="text"
                          placeholder="Digite a idade do aluno"
                        />
                      </div>
                    </ContainerInput>
                    <ContainerInput>
                      <label>Foto</label>
                      <div className="inputs">
                        <Input
                          id="foto"
                          type="file"
                          accept="image/png, image/jpeg"
                        />
                      </div>
                    </ContainerInput>
                  </div>
                  <div className="containerButtons">
                    <button className="buttonCancel">Cancel</button>
                    <SubmitButton
                      text={'Salvas Mudanças'}
                      type={'button'}
                      variant={'secondary'}
                    />
                  </div>
                </div>
              </div>
            </ContainerAluno>
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
                {alunos.map((aluno) => (
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
                    <td id="name">
                      {aluno.nome} {aluno.sobrenome}
                    </td>
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
                ))}
              </tbody>
            </TableAlunos>
          </div>
        ) : (
          <TableAlunos>
            <tbody>
              <tr>
                <td>
                  <h3>Nenhum aluno encontrado!</h3>
                </td>
              </tr>
            </tbody>
          </TableAlunos>
        )}
      </ContainerConteudo>
    </Container>
  );
}
