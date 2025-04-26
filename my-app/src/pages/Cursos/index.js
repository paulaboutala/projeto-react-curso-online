// Cursos.jsx
import styles from './Cursos.module.css';
import Menu from '../../components/Menu';
import Busca from '../../components/Busca';
import Cardlist from '../../components/Cardlist';
import cursos from "../../json/db.json";
import Provider from "../../context/Provider";

function Cursos() {
  return (
    <Provider>
      <div>
        <Menu />
        <Busca />
        <div className={styles.container}>
          <section className={styles.listacursos}>
            <Cardlist cursos={cursos} emptyHeading="Nenhum curso encontrado" />
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default Cursos;
