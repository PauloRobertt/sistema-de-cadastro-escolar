import SubmitButton from '../../components/SubmitButton';
import { ContainerPage404, ContentPage404, Image404 } from './styled';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <ContainerPage404>
        <Image404 />
        <ContentPage404>
          <h1>404</h1>
          <h2>Ops! Parece que você se perdeu…</h2>
          <h3>Não encontramos o que você procurava.</h3>
          <SubmitButton
            text={
              <>
                <FaLongArrowAltLeft size={24} /> Voltar para página inicial
              </>
            }
          />
        </ContentPage404>
      </ContainerPage404>
    </Container>
  );
}
