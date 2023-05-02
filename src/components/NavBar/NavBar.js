
import styles from './NavBar.module.scss'

const NavBar = () => {

    return(
        <div className={styles.navbar}>
            <div className={styles.navContent}>
            <a href="/">
                <i className="fa fa-tasks"></i>
            </a>
            <div className={styles.mainNav}>
                <a href="/">Home</a>
                <a href="/favorite">Favorite</a>
                <a href="/about">About</a>
            </div>
            </div>
        </div>
    );
};
export default NavBar;