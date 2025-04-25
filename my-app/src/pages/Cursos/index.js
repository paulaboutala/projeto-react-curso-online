import styles from './Cursos.module.css';
import Menu from '../../components/Menu';
import Busca from '../../components/Busca';
import Cardlist from '../../components/Cardlist';
import cursos from "../../json/db.json";


function Cursos() {
  return (
    <div> 
      <Menu />
      <Busca />
      <div className={styles.container}>
        <section className={styles.listacursos}>
          <Cardlist cursos={cursos}/>
        </section>
      </div>
    </div>
  );
}

export default Cursos;