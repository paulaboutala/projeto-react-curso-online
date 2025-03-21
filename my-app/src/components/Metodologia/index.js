import styles from './Metodologia.module.css';

function Metodologia() {
    return (
      <div className={styles.carrossel}>
        <h1>Nossa metodologia</h1>
        <div className={styles.slider}>
          <div className={styles.item}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>UX/UI Design</div>
          </div>
          <div className={styles.item}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>Web Development</div>
          </div>
          <div className={styles.item}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>Análise de dados</div>
          </div>
        </div>
      </div>
    );
}

export default Metodologia;