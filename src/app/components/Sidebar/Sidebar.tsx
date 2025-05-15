import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <h2>Search Pokémon</h2>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Sidebar;
