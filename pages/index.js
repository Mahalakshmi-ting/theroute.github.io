// MODULES //

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HeroBanner from "../src/components/HeroBanner";

// SECTIONS //
import WeAreTheRoute from "../src/sections/home/WeAreTheRoute";
import WhoWeAre from "../src/sections/home/WhoWeAre";
import WhatMakesUsDifferent from "../src/sections/home/WhatMakesUsDifferent";
import WhatWeDo from "../src/sections/home/WhatWeDo";
import WeBelieve from "../src/sections/home/WeBelieve";

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Home.module.scss";


/** Home Page */
export default function Home() {
	return (
		<div>
			<Head>
				<title>The Route</title>
				<meta name="description" content="The route" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<HeroBanner />

			<main className={`${styles.index_page} d-block`}>

				<WeAreTheRoute />

				<WhoWeAre />

				<WhatMakesUsDifferent />
				
				<WhatWeDo />

				<WeBelieve />
				
			</main>
			<Footer />
		</div>
	);
}
