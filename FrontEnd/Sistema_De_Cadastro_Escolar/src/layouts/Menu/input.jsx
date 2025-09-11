import { ContainerMenu, ContainerTitle, Nav } from './styled';

import { IoSchoolOutline } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { RiGroupLine } from 'react-icons/ri';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

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
                  <FaHome /> Home
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
                  <RiGroupLine /> Alunos
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
                  <FaRegUser /> Usuario
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
