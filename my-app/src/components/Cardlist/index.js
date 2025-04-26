// Cardlist.jsx
import { useContext } from 'react';
import SearchContext from '../../context/SearchContext';
import styles from './Cardlist.module.css';
import Card from '../Card';

function Cardlist({ cursos, emptyHeading }) {
  const { searchText } = useContext(SearchContext);

  // Filtro simples com includes, pode melhorar se quiser
  const cursosFiltrados = cursos.filter((curso) =>
    curso.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const count = cursosFiltrados.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'cursos' : 'curso';
    heading = `${count} ${noun}`;
  }

  return (
    <>
      <h1>{heading}</h1>
      <section className={styles.cardlist}>
        {cursosFiltrados.map((curso) => (
          <Card id={curso.id} key={curso.id} />
        ))}
      </section>
    </>
  );
}

export default Cardlist;
