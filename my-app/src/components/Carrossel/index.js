import styles from './Carrossel.module.css';
import Card from '../Card/index.js';

function Carrossel() {
    return (
      <div className={styles.carrossel}>
        <h1>Cursos em alta</h1>
        <div className={styles.slider}>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
    );
}

export default Carrossel;