import styles from './Cursos.module.css';
import Menu from '../../components/Menu';
import Busca from '../../components/Busca';
import Cardlist from '../../components/Cardlist';


function Cursos() {
  return (
    <div> 
      <Menu />
      <Busca />
      <div className={styles.container}>
        <h1>Todos os nossos Cursos</h1>
        <section className={styles.listacursos}>
          <Cardlist/>
        </section>
      </div>
    </div>
  );
}

export default Cursos;