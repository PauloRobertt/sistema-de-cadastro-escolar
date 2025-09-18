import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import axios from '../../service/axios';
import * as actions from '../../store/modules/auth/actions';

//Styled-Components
import { ContainerEditAluno, ContainerInput, UploadPhotoModal } from './styled';

//Componentes
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/Input/input';
import { ErrorColor, primaryColor } from '../../config/colors';

//Icons
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';

export default function EditAlunoModal(props) {
  const [aluno, setAluno] = useState(props.dadosAluno);
  const [showPhoto, setShowPhoto] = useState(false);
  const [foto, setFoto] = useState();
  const [file, setFile] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setAluno(props.dadosAluno);
  }, [props.dadosAluno]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    editAluno(aluno);
  };

  const handleSubmitPhoto = (e) => {
    e.preventDefault();
    uploadPhoto(file, aluno.id);
  };

  const uploadPhoto = async (foto, id) => {
    const formData = new FormData();
    formData.append('photo-file', foto);
    formData.append('aluno_id', id);

    try {
      await axios.post('/photo-profile/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto atualizada com sucesso!', {
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
      props.getAlunos();
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
      if (error.status === 401) dispatch(actions.loginError());
    }
  };

  const handleOnChange = (e) => {
    setAluno({ ...aluno, [e.target.id]: e.target.value });
  };

  const handleOnChangePhoto = (e) => {
    const photoFile = e.target.files[0];
    setFile(photoFile);
    const fotoURL = URL.createObjectURL(photoFile);

    setFoto(fotoURL);
  };

  const editAluno = async (aluno) => {
    try {
      await axios.put(`/alunos/${aluno.id}`, aluno);
      toast.success('Aluno editado com sucesso!', {
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
      props.getAluno(aluno.id) + setAluno({});
      showPhoto ? setShowPhoto(false) : setShowPhoto(true);
      props.getAlunos();
    } catch (error) {
      console.log(error);
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
      if (error.status === 401) dispatch(actions.loginError());
    }
  };

  return (
    <ContainerEditAluno showEditAluno={props.showForm}>
      <div className="container">
        <div className="containerContent">
          <div className="containerFoto">
            <div className="Foto">
              {!aluno.Photos ? (
                <FaUserCircle className="profile" size={'2em'} />
              ) : aluno.Photos.length > 0 ? (
                <img
                  className="profile"
                  crossOrigin="anonymous"
                  src={aluno.Photos[0].url}
                  alt="Foto de aluno"
                />
              ) : (
                <FaUserCircle className="profile" size={'2em'} />
              )}
            </div>
            <MdOutlineEdit
              onClick={() =>
                showPhoto ? setShowPhoto(false) : setShowPhoto(true)
              }
              cursor={'pointer'}
              size={'1.3em'}
            />
          </div>
          <div className="DadosUsuario">
            <h3>
              {aluno.nome} {aluno.sobrenome}
            </h3>
            <p>{aluno.email}</p>
          </div>
          <form onSubmit={handleSubmit} className="formAluno">
            <div className="containerInputs">
              <ContainerInput>
                <label>Nome</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    id="nome"
                    type="text"
                    value={aluno.nome}
                    placeholder="Digite o nome do aluno"
                  />
                  <Input
                    onChange={handleOnChange}
                    id="sobrenome"
                    value={aluno.sobrenome}
                    type="text"
                    placeholder="Digite o sobrenome do aluno"
                  />
                </div>
              </ContainerInput>
              <ContainerInput>
                <label>E-mail</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    id="email"
                    type="email"
                    value={aluno.email}
                    placeholder="Digite o e-mail do aluno ou responsavel"
                  />
                </div>
              </ContainerInput>
              <ContainerInput>
                <label>Idade</label>
                <div className="inputs">
                  <Input
                    onChange={handleOnChange}
                    id="idade"
                    type="number"
                    minNumber={1}
                    maxNumber={120}
                    value={aluno.idade}
                    placeholder="Digite a idade do aluno"
                  />
                </div>
              </ContainerInput>
            </div>
            <div className="containerButtons">
              <button
                className="buttonCancel"
                type="button"
                onClick={() => {
                  props.getAluno(aluno.id) + setAluno({}) + showPhoto
                    ? setShowPhoto(false)
                    : setShowPhoto(true);
                }}
              >
                Cancel
              </button>
              <SubmitButton
                text={'Salvar Alterações'}
                type={'submit'}
                variant={'secondary'}
              />
            </div>
          </form>
        </div>
      </div>
      <UploadPhotoModal showUploadPhoto={showPhoto}>
        <h1>Foto</h1>
        <form onSubmit={handleSubmitPhoto}>
          <label htmlFor="foto">
            {foto ? <img src={foto} alt="Foto aluno" /> : 'Selecionar'}
            <input type="file" id="foto" onChange={handleOnChangePhoto} />
          </label>
          <SubmitButton
            text={'Salvar Foto'}
            onClick={() => {
              setShowPhoto(false) + setFoto();
            }}
            type="submit"
            variant={'secondary'}
          />
        </form>
      </UploadPhotoModal>
    </ContainerEditAluno>
  );
}
