import styles from './Card.module.css';
import cursos from '../../json/db.json';

function Card({ id }) {
    const curso = cursos.find(curso => curso.id === id);
    
    // Importa a imagem do arquivo dentro da pasta assets
    const imagemSrc = curso ? require(`../../assets/${curso.imagem}`) : null;

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                {imagemSrc && <img src={imagemSrc} alt={curso.nome} />}
            </div>
            <div className={styles.bottom}>
                {curso ? curso.nome : "Curso não encontrado"}
            </div>
        </div>
    );
}

export default Card;

