import React from "react";
import Hrs from "../Hrs";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
	  useEffect(() => {
			AOS.init({
				duration: 2000, // Customize the duration of the animation
			});
		}, []);
	return (
		<section id="Hero-Sec">
			<div data-aos="fade-up">
				<h1>
					Your Trusted Partner in Mountain Climbing Expeditions
					<p style={{ color: "green " }}>Alpine Ascents</p>
				</h1>
				<br />
				<p style={{ fontSize: "17px" }}>
					"Join us for guided climbs that turn every peak into an
					unforgettable adventure"
				</p>
				<br />
					<button className="start-btn btn">
					Get Started <i class="bx bx-right-arrow-alt bx"></i>
				</button>
			</div>

			<div>
				<Hrs />
			</div>
		</section>
	);
}

export default Home;
