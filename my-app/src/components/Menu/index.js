import styles from './Menu.module.css';
import {Link} from "react-router-dom";

function Menu() {
    return (
      <header className={styles.menu}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link>
        </nav>
        <button className={styles.loginButton}>Login</button>
      </header>
    );
  }
export default Menu;