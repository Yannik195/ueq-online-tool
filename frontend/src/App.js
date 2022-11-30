import styles from './App.module.scss';
import Routes from "./Routes/Routes"
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar className={styles.navbar} />
      <Routes className={styles.content} />
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
