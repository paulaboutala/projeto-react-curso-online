import styles from './Carrossel.module.css';
import Card from '../Card/index.js';

function Carrossel() {
    return (
        <div className={styles.carrossel}>
            <h1>Cursos em alta</h1>
            <div className={styles.slider}>
                <Card id={1} />
                <Card id={2} />
                <Card id={3} />
            </div>
        </div>
    );
}

export default Carrossel;
