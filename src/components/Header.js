// MODULES //

//CONSTANS // 
import { navMenus } from '../../constants';

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Header.module.scss";

/** Header Component */
const Header = () => {
	return <div className={`${styles.main_header}`}>
    <div className="d-flex align-items-end">
      <a href="/">
        <img
          src="/the-route-logo-black.png"
          className={`${styles.logo_image} me-5 pe-4`}
        />
      </a>
            {navMenus.map((menu) => (
              <a
                key={menu.title}
                href={menu.url}
                className="text-black me-lg-5 pe-3"
              >{menu.title}</a>
            ))}
          </div>
	</div>;
};

export default Header;
