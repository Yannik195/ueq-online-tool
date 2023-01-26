import styles from './App.module.scss';
import Routes from "./Routes/Routes"
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  //Google Analytics
  ReactGA.initialize("G-FYSSFHKG03");
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <div className="App">
      <Navbar className={styles.navbar} />
      <Routes className={styles.content} />
      {/* <Footer className={styles.footer} /> */}
    </div>
  );
}

export default App;