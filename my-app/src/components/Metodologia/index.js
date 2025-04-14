import { useState } from 'react';
import styles from './Metodologia.module.css';

function Metodologia() {
    const [passoAtivo, setPassoAtivo] = useState(1);

    const textos = {
        1: "Acesse as aulas quando quiser e quantas vezes precisar. Flexibilidade total para encaixar os estudos na sua rotina.",
        2: "Exercícios interativos e projetos práticos para fixar o conteúdo e aplicar o que aprendeu desde o início.",
        3: "Conte com tutores e uma comunidade ativa para tirar dúvidas, trocar experiências e seguir avançando"
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
