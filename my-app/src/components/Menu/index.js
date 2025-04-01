import styles from './Menu.module.css';
import {Link} from "react-router-dom";

function Menu() {
    return (
      <header className={styles.menu}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
        <button className={styles.loginButton}>Login</button>
      </header>
    );
  }
export default Menu;

//Verificar como inserir corretamente os links no menu em React