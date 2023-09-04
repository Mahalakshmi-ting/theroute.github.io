// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/WeAreTheRoute.module.scss";

/** Home WeAreTheRoute Section */
export default function WeAreTheRoute() {
	return (<div className={styles.we_are_the_route}>		
        <div className="container py-5">
            <div className="row justify-content-center  text-center">
                <div className="col-lg-10">
                    <h1 class="title text-uppercase">WE ARE THE ROUTE TO GLORY<br/>
                        THE ROUTE TO GREATNESS ★ THE ROUTE TO SUCCESS  </h1>  
                
            </div>
            <div className="col-lg-7">
                    <p>We are The Route - we build talents and careers which we do with passion and a vision to help our clients grow and shine.With some of the most seasoned talent managers from across the country, we pride ourselves on great expertise within the team, having immaculate knowledge on all verticals of the film industry.</p>
                </div>
                <div className="col-lg-11">
                    <img src="/home/vijay-home-image.png" />
            </div>
        </div>           
      </div>
	
	</div>);
}
