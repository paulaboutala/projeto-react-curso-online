import { useState } from 'react';
import styles from './Metodologia.module.css';

function Metodologia() {
    const [passoAtivo, setPassoAtivo] = useState(1);

    const textos = {
        1: "Descrição do Passo 1",
        2: "Descrição do Passo 2",
        3: "Descrição do Passo 3"
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Nossa metodologia</h1>
            <div className={styles.content}>
                <div className={styles.leftColumn}>
                    {[1, 2, 3].map((num) => (
                        <div
                            key={num}
                            className={`${styles.box} ${passoAtivo === num ? styles.bold : ""}`}
                            onClick={() => setPassoAtivo(num)}
                        >
                            Passo {num}
                        </div>
                    ))}
                </div>
                <div className={styles.rightColumn}>
                    {passoAtivo ? textos[passoAtivo] : "Descrição detalhada"}
                </div>
            </div>
        </div>
    );
}

export default Metodologia;
