// MODULES //

// COMPONENTS //


// STYLES //
import styles from "../../styles/sections/home/WhatMakesUsDifferent.module.scss";

/** Home WhatMakesUsDifferent Section */
export default function WhatMakesUsDifferent() {
	return (<div className={styles.what_makes_us_different}>		
        <div className="container py-5">
            <div className="row justify-content-center  text-center">
                <div className="col-lg-7">
                    <h1 class="title text-uppercase">What makes us different </h1> 
                    <p className="mb-5">We help our clients find <strong>The Route</strong> to being culturally significant and
                        etching a name for themselves amongst the stars.<br />This is what sets us apart from the rest.</p>
                     </div>
            <div className="col-lg-11 text-center">
                    <img src="/home/samantha-home-image.png" />
                    <img src="/home/yellow-star.png" className="mx-auto mb-5"/>
                    <img src="/home/camera.png" className="mx-auto"/>
                    
            </div>
            
        </div>           
      </div>
	
	</div>);
}