// MODULES //

// COMPONENTS //
import { navMenus } from '../../constants';
import { socials } from '../../constants';

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Footer.module.scss";

/** Footer Component */
const Footer = () => {
	return (<footer className={styles.main_footer}>
		<div className="container">
			<div className="row justify-content-around">
				<div className="col-lg-5">
					<h4 className='text-uppercase'>The Route</h4>
					<p>We are The Route - we strive to shape talent, build pathways and tell a story. Our focus is to help our clients grow, entertain, inspire, and expand their potential to their fullest.</p>

				</div>
				<div className="col-lg-3 d-flex flex-column">
					<h4>Navigate</h4>
				{navMenus.map((menu) => (
            	  <a
                key={menu.title}
                href={menu.url}
                className="text-white me-lg-5 pe-3"
              >{menu.title}</a>
            ))}
				</div>
				<div className="col-lg-2 ps-5 main_footer social-icons">
					<h4>Follow Us</h4>
					{socials.map((social) => (
            	  <a
				key={social.title}
                href={social.url}
				className="icon-link"
				target="_blank"
				
				>
				<img
				key={social.title}
				src={social.imgUrl}
								className="me-2 mb-2 icon-img p-1 rounded-circle bg-warning"
								width="30"
								height="30"
							/>
				</a>
            ))}
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-5">
<p>The Route, All Rights Reserved 2023</p>
				</div>
				<div className="col-lg-6 text-end">
<img src="/made-by-ting.svg" alt="Made by Ting" className="ms-auto"/>
				</div>
				</div>
		</div>
	</footer>);
};

export default Footer;
