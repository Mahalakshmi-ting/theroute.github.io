// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/WeBelieve.module.scss";

/** Home WeBelieve Section */
export default function WeBelieve() {
	return (<div className={styles.WeBelieve}>		
        <div className="container py-5">
            <div className="row justify-content-center  text-center">
                <div className="col-lg-7">
                     <img src="/home/black-star.png" className="mx-auto mb-4" />
                    <h1 class="title text-uppercase">We believe</h1>  
                    <h1 className="title text-uppercase text-dark">The Route is driven by doing<br /> what’s best for our clients.</h1>
                    <p>We believe in going the extra mile for our talents and clients, always looking for the perfect opportunity and<br/>
            making the right decisions.</p>
                        
                </div>
                
        </div>           
      </div>
	
	</div>);
}