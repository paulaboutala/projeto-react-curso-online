import styles from './Metodologia.module.css';

function Metodologia() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Nossa metodologia</h1>
            <div className={styles.content}>
                <div className={styles.leftColumn}>
                    <div className={styles.box}>Passo 1</div>
                    <div className={styles.box}>Passo 2</div>
                    <div className={styles.box}>Passo 3</div>
                </div>
                <div className={styles.rightColumn}>Descrição detalhada</div>
            </div>
        </div>
    );
}

export default Metodologia;