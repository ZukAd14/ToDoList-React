import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <div className={styles.navbar}>
            <div className={styles.navContent}>
                <a href="/">
                    <i className="fa fa-tasks"></i>
                </a>
                <div >
                    <ul className={styles.mainNav}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default NavBar;