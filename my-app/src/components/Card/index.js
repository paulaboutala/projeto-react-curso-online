import styles from './Card.module.css';
import cursos from '../../json/db.json';


function Card({ id }) {
    const curso = cursos.find(curso => curso.id === id);

    return (
        <div className={styles.item}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>
                {curso ? curso.nome : "Curso não encontrado"}
            </div>
        </div>
    );
}

export default Card;
