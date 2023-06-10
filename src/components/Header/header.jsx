import { useState } from 'react';
import ChangeThem from '../changeThem';
import transitionThem from '../changeThem/theme.module.scss';
import styles from './header.module.scss';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import path from '../../Routes/path';


function Header() {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isHeaderActive, setHeaderActive] = useState(false);
    const [isLogoActive, setLogoActive] = useState(false);

    const toggleNav = () => {
        setNavVisible(!isNavVisible);
        setHeaderActive(!isHeaderActive);
        setLogoActive(!isLogoActive);
    };

    const closeNav = () => {
        setNavVisible(false);
        setHeaderActive(false);
        setLogoActive(false);
    };

    return (
        <header className={`${styles['header']} ${isHeaderActive ? styles.isHeaderActive : ''}`}>
            <div className="container">
                <div className={`${styles['header-body']} ${isHeaderActive ? styles['isHeaderActive'] : ''}`}>
                    <div className={`${styles['header-logo__block']} ${isLogoActive ? styles['isLogoActive'] : ''}`}>
                        <a href="/">
                            <img className={styles['header-logo']} src={logo} alt={logo} />
                        </a>
                        <div>
                            <ChangeThem />
                        </div>
                    </div>
                    <div className={styles['burger']}>
                        <div className={styles['burger-menu']} onClick={toggleNav}>
                            <span className={styles['burger-line']}></span>
                            <span className={styles['burger-line']}></span>
                            <span className={styles['burger-line']}></span>
                        </div>
                    </div>
                    <nav className={`${styles['header-nav']} ${isNavVisible ? styles['header-nav-visible'] : ''}`}>
                        <ul className={styles['header-navigation']}>
                            <li className={styles['navigation-item']}>
                                <NavLink className={styles['navLink']} to={path.home} onClick={closeNav}>
                                    HOME
                                </NavLink>
                            </li>
                            <li className={styles['navigation-item']}>
                                <NavLink className={styles['navLink']} to={path.about} onClick={closeNav}>
                                    ABOUT
                                </NavLink>
                            </li>
                            <li className={styles['navigation-item']}>
                                <NavLink className={styles['navLink']} to={path.characters} onClick={closeNav}>
                                    CHARACTERS
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
