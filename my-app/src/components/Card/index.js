import styles from './Card.module.css';


function Card() {
    return (
          <div className={styles.item}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>Nome do curso</div>
          </div>
    );
}

export default Card;