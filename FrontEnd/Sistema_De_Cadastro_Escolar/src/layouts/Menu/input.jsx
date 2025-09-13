import { ContainerMenu, ContainerTitle, Nav } from './styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

//Icons
import { IoSchoolOutline } from 'react-icons/io5';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { IoHomeOutline } from 'react-icons/io5';

//components
import SubmitButton from '../../components/SubmitButton';
import LinkButton from '../../components/LinkButton';

export default function Menu() {
  const isLogged = useSelector((state) => state.auth.authReducer.isLoggedIn);
  const dispatch = useDispatch();

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
          <>
            {isLogged ? (
              <SubmitButton
                text={
                  <>
                    <CiLogout size={'1.3em'} /> Log Out
                  </>
                }
                variant={'loggout'}
                onClick={() => {
                  dispatch(actions.loginError());
                }}
                type={'button'}
              />
            ) : (
              <LinkButton
                variant={'menuLogin'}
                path={'/login'}
                text={
                  <>
                    <CiLogin size={'1.3em'} /> Login
                  </>
                }
              />
            )}
          </>
        </ul>
      </Nav>
    </ContainerMenu>
  );
}
