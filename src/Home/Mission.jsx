import React from "react";
import "./home.css";
import mmm from "../assets/img/mmm.webp";
function Mission() {
	return (
		<section>
			<section id="Mission">
				<div>
					<b>
						<h1>Our Mission</h1>
					</b>
				</div>

				<div>
					<p>
						<span style={{ color: "green" }}> Alpine Ascents</span>{" "}
						is a leading name in the mountaineering industry,
						dedicated to helping climbers achieve their personal
						goals through safe, challenging, and fun expeditions.
						Our mission is simple: to provide top-quality mountain
						adventures with some of the best guides in the field. We
						prioritize safety and excellence, enabling climbers at
						all levels to explore the thrill of mountaineering
						responsibly. With years of experience and a commitment
						to ethical practices, Alpine Ascents is here to help you
						reach new heights.
					</p>
					<br />
					<img src={mmm} alt="" />
				</div>
			</section>
			<section className="Sec-Rev">
				<div className="Reviews">
					<div>
						<span>
							<h1>10</h1>
							<p>Years of experience</p>
						</span>
					</div>

					<div>
						<span>
							<h1>1K</h1>
							<p>Mountian Climbing Location Spot </p>
						</span>
					</div>

					<div>
						<span>
							<h1>2M</h1>
							<p>Happy Users</p>
						</span>
					</div>

					<div>
						<span>
							<h1>4.7</h1>
							<p>Overall Rating</p>
						</span>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Mission;
