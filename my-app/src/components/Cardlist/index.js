import styles from './Cardlist.module.css';
import Card from '../Card';

function Cardlist({cursos, emptyHeading}){

    const count = cursos.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'cursos' : 'curso'
        heading = `${count} ${noun}`
    }

    return(
        <>
            <h1>{heading}</h1>
            <section className={styles.cardlist}>
                {cursos.map((curso) => <Card id={curso.id} key={curso.id}/>)}
            </section>
        </>
    )
}

export default Cardlist;