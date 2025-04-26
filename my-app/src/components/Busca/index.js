import { useContext } from 'react';
import SearchContext from '../../context/SearchContext';
import styles from './Busca.module.css';

function Busca() {
  const { searchText, setSearchText } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className={styles.busca}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}

export default Busca;
