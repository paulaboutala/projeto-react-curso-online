import {useState} from 'react';
import styles from './Busca.module.css';

function Busca() {

  const [texto, setTexto] = useState("");

  const handleChange = (event) => {setTexto(event.target.value);};

    return (
      <div className={styles.busca}>

        <input 
        type="search" 
        placeholder="Pesquisar..." 
        value={texto}
        onChange={handleChange}
        className={styles.input} 
        />

        <h1>{texto}</h1>

      </div>
      
    );
  }
export default Busca;