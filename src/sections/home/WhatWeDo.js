// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/WhatWeDo.module.scss";

/** Home WhatWeDo Section */
export default function WhatWeDo() {
	return (<div className={styles.what_we_do}>		
        <div className="container py-5">
            <div className="row justify-content-center  text-center">
                <div className="col-lg-10">
                    <h1 class="title text-uppercase">What we do</h1>  
                    <p>There is not one answer to what we do, <br/><strong>The Route</strong> can take you to
            many destinations. <br/>We, at <strong>The Route</strong> help create, develop and <br/>deliver
            opportunities for our talents.</p>    
                </div>
                
                <div className="col-lg-6 p-5 bg-black text-center trophy_section">
                     <img src="/home/home-trophy.png" className="mx-auto mb-4" />
                <h1 className="text-white text-uppercase">“We are The Route to dreams.<br/> We are the
                    route<br/> to endless possibilities.”</h1>
                </div>
               
            
        </div>           
      </div>
	
	</div>);
}