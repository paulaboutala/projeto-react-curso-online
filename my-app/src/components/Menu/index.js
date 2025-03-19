import styles from './Menu.module.css';

function Menu() {
    return (
      <nav className={styles.menu}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/cursos">Cursos</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>
        <button>Login</button>
      </nav>
    );
  }
export default Menu;

//Verificar como inserir corretamente os links no menu em React