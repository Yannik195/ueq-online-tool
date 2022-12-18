import styles from './Navbar.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.ul}>
        <Link to="/" className={styles.logo}>
          <FontAwesomeIcon icon={faClipboard} />
          <li>UEQ Online</li>
        </Link>
        <Link to="/q/create">
          <button className={styles.button}>Create UEQ</button>
        </Link>
      </ul>
    </div>
  )
}