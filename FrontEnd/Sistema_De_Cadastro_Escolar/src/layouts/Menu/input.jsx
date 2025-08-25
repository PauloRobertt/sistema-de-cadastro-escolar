import { ContainerMenu, ContainerTitle, Nav } from './styled';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { PiStudent } from 'react-icons/pi';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import LinkButton from '../../components/LinkButton';

export default function Menu() {
  return (
    <ContainerMenu>
      <ContainerTitle>
        <IoSchoolOutline fontSize={'3em'} />
        <p>Sistema de Cadastro Escolar</p>
      </ContainerTitle>
      <Nav>
        <ul>
          <LinkButton
            variant={'menu'}
            path={''}
            text={
              <>
                <FaHome /> Home
              </>
            }
          />
          <LinkButton
            variant={'menu'}
            path={''}
            text={
              <>
                <PiStudent /> Alunos
              </>
            }
          />
        </ul>
        <ul>
          <LinkButton
            variant={'menuLogin'}
            path={''}
            text={
              <>
                <CiLogout />
                Log Out // <CiLogin /> Login
              </>
            }
          />
        </ul>
      </Nav>
    </ContainerMenu>
  );
}
