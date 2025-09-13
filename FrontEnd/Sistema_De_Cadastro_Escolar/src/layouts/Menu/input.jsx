import { ContainerMenu, ContainerTitle, Nav } from './styled';

//Icons
import { IoSchoolOutline } from 'react-icons/io5';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';

import { FiUsers } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';

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
          <li>
            <LinkButton
              variant={'menu'}
              path={'/'}
              text={
                <>
                  <IoHomeOutline size={'1.3em'} /> Home
                </>
              }
            />
          </li>
          <li>
            <LinkButton
              variant={'menu'}
              path={'/alunos'}
              text={
                <>
                  <FiUsers size={'1.3em'} /> Alunos
                </>
              }
            />
          </li>
          <li>
            <LinkButton
              variant={'menu'}
              path={'/usuario'}
              text={
                <>
                  <FiUser size={'1.3em'} /> Usuario
                </>
              }
            />
          </li>
        </ul>
        <ul>
          <LinkButton
            variant={'menuLogin'}
            path={''}
            text={
              <>
                <CiLogout size={'1.3em'} />
                Log Out // <CiLogin size={'1.3em'} /> Login
              </>
            }
          />
        </ul>
      </Nav>
    </ContainerMenu>
  );
}
