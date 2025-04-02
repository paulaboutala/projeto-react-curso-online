import styles from './Cardlist.module.css';
import Card from '../Card';
import cursos from '../../json/db.json';

function Cardlist(){
    return(
        <section className={styles.cardlist}>
            {cursos.map((curso) => <Card id={curso.id} key={curso.id}/>)}
        </section>
    )
}

export default Cardlist;