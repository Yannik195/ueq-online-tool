import styles from './Navbar.module.scss'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/q/create">
          <li>Create UEQ</li>
        </Link>
      </ul>
    </div>
  )
}