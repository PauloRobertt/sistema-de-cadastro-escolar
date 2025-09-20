import { ContainerSearch } from './styled';

// Icons
import { IoIosSearch } from 'react-icons/io';

export default function Search(props) {
  return (
    <ContainerSearch>
      <IoIosSearch size={'1.3em'} />
      <input
        type="text"
        placeholder="Pesquise o aluno desejado"
        onChange={(e) => {
          props.buscarAluno(e.target.value);
        }}
      />
    </ContainerSearch>
  );
}
