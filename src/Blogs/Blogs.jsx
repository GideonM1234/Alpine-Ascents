import React from 'react'
import './blogs.css'
import tech from '../assets/img/newt.jpg'
import resarch from '../assets/img/Research.jpg'
import imgss from '../assets/img/IMG_8573.jpeg'
import notw from '../assets/img/18696623359_ffc010cbe9_k.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Blogs() {
  useEffect(() => {
		AOS.init({
			duration: 2000, // Customize the duration of the animation
		});
  }, []);
	

  return (
		<section data-aos="fade-up"	 id="Blogs">
			<h1 style={{ fontSize: "36px", textAlign: "center" }}>Blogs</h1>
			<br />
			<br />
			<section className="Blogs-sec">
				<duv class="development-item">
					<img src={tech} alt="" />
					<br />
					<br />
					<h3>New Technologies</h3>
					<br />
					<p>
						Explore the latest innovations in climbing gear and
						safety equipment that enhance your mountaineering
						experience.
					</p>
					<br />
					<a>Learn More</a>
				</duv>

				<div class="development-item">
					<img src={resarch} alt="" />
					<br />
					<br />
					<h3>Research and Training</h3>
					<br />

					<p>
						Learn about new techniques and training methodologies
						that can improve climbing performance and safety.
					</p>
					<br />
					<a>Learn More</a>
				</div>

				<div class="development-item">
					<img src={imgss} alt="" />
					<br />
					<br />
					<h3>Environmental Considerations</h3>
					<br />
					<p>
						Stay updated on sustainability practices, conservation
						efforts, and the impact of climate change on
						mountaineering.
					</p>
					<br />
					<a>Learn More</a>
				</div>

				<div class="development-item">
					<img src={notw} alt="" />
					<br />
					<br />
					<h3>Notable Expeditions</h3>
					<br />
					<p>
						Read about recent significant climbs and expeditions,
						including their challenges and outcomes.
					</p>
					<br />
					<a>Learn More</a>
				</div>
			</section>
		</section>
  );
}

export default Blogs