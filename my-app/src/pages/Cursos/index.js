import styles from './Cursos.module.css';
import Menu from '../../components/Menu';
import Busca from '../../components/Busca';
import Cardlist from '../../components/Cardlist';


function Cursos() {
  return (
    <div className={styles.container}> 
      <Menu />
      <Busca />
      <h1>Lista de Cursos</h1>
      <section className={styles.listacursos}>
        <Cardlist/>
      </section>
    </div>
  );
}

export default Cursos;