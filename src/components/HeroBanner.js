import styles from "../styles/components/HeroBanner.module.scss";

/** Hero Banner Component */
const HeroBanner = () => {
	return (<div className={`${styles.hero_banner}`}>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-lg-12">
                    <img src="/hero-banner-desktop.png" className="img-fluid w-100 d-md-block d-none" />
                    <img src="/hero-banner-mobile.png" className="img-fluid w-100 d-md-none d-block"/>
            </div>
        </div>           
      </div>
	</div>);
};

export default HeroBanner;