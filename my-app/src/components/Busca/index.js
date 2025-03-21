import styles from './Busca.module.css';

function Busca() {
    return (
      <div className={styles.busca}>
        <input type="text" placeholder="Pesquisar..." className={styles.input} />
      </div>
    );
  }
export default Busca;