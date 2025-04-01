import styles from './Cursos.module.css';
import Menu from '../../components/Menu';
import Busca from '../../components/Busca';


function Cursos() {
  return (
    <div className={styles.container}> 
      <Menu />
      <Busca />

    </div>
  );
}

export default Cursos;