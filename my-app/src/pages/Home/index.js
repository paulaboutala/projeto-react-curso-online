import styles from './Home.module.css';
import Menu from '../../components/Menu';
import Busca from '../../components/Busca';
import Carrossel from '../../components/Carrossel';
import Metodologia from '../../components/Metodologia';

function Home() {
  return (
    <div className={styles.container}> 
      <Menu />
      <Busca />
      <Carrossel />
      <Metodologia />
    </div>
  );
}

export default Home;

//Estudar mais position. Flexbox, css grid, etc