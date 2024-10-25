import React, { useState, useEffect } from "react";
import "./mountian.css";
import alpine from "../assets/img/alpine.jpg";
import Expendition from "../assets/img/pexels-pixabay-532803.jpg";
import Rock from "../assets/img/pexels-toulouse-18331820.jpg";
import Map from "../gougleMap/Map";
import AOS from "aos";
import "aos/dist/aos.css";
function Mountian() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedLevel, setSelectedLevel] = useState(null);

	const slides = [
		{
			title: "Alpine Climbing",
			content:
				"Alpine climbing is a dynamic form of mountaineering that involves ascending mountains in high-altitude environments, often combining rock, snow, and ice climbing techniques. This challenging pursuit requires climbers to navigate rugged terrains, unpredictable weather, and variable conditions, all while carrying essential gear and supplies. Alpine climbing emphasizes self-reliance, physical endurance, and adaptability, as climbers face a mix of technical routes and ever-changing landscapes. With its blend of adventure and skill, alpine climbing offers an unparalleled opportunity to explore remote mountain regions and achieve personal milestones",
			image: alpine,
		},
		{
			title: "Expedition Climbing",
			content:
				"Expedition climbing is an advanced form of mountaineering that involves extended journeys to reach high-altitude peaks, often in remote or challenging environments. These expeditions can last from several days to weeks, requiring climbers to carry all necessary gear, food, and shelter as they progress through rugged terrain and variable weather conditions. Expedition climbing tests endurance, self-sufficiency, and team collaboration, as climbers work together to overcome obstacles and achieve their summit goals. This pursuit not only demands technical skills but also offers the chance to experience the beauty and solitude of some of the world’s most breathtaking mountain landscapes",
			image: Expendition,
		},
		{
			title: "Rock and Ice Climbing",
			content:
				"Rock and ice climbing are specialized forms of mountaineering that focus on ascending steep rock faces and frozen waterfalls. Rock climbing involves using hands and feet, along with gear like ropes and harnesses, to navigate vertical rock walls and intricate routes. Ice climbing, on the other hand, requires climbers to use ice axes and crampons to ascend icy surfaces and frozen terrain. Both forms demand precision, strength, and technical skills, as well as the ability to adapt to changing conditions. Rock and ice climbing offer a unique combination of challenge and exhilaration, allowing climbers to test their limits and connect deeply with the natural elements",
			image: Rock,
		},
	];

	const goToPrevious = () => {
		setCurrentIndex(
			currentIndex === 0 ? slides.length - 1 : currentIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((currentIndex + 1) % slides.length);
	};

	// Automatically move to the next slide
	useEffect(() => {
		const interval = setInterval(() => {
			goToNext();
		}, 8000); // Change slide every 3 seconds

		// Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, [currentIndex]);

	  useEffect(() => {
			AOS.init({
				duration: 2000, // Customize the duration of the animation
			});
		}, []);
	return (
		<section id="Mountian-sec">
			<section data-aos="fade-up" id="Mountian">
				<div>
					<h1>Mountaineering</h1>
					<br />
					<p>
						Mountaineering, a thrilling adventure that has roots
						stretching back to early explorers in the Alps, is like
						the ultimate playground for those who love a challenge!
						With various styles to choose from, there's something
						for every thrill-seeker. You'll master techniques like
						rock climbing, ice climbing, and glacier travel, turning
						you into a mountain ninja! And let's not forget about
						sheltering—whether you’re snuggling into a cozy tent, a
						bivouac, or even a snow cave, having a warm spot to rest
						is key after a day of conquering heights. But beware:
						the mountains can be mischievous! Hazards like
						avalanches, extreme weather, altitude sickness, and the
						occasional slip mean you’ve got to be prepared, stay
						alert, and always show respect for the majestic giants
						you’re tackling. So lace up those boots, grab your gear,
						and get ready for the adventure of a lifetime!
					</p>
				</div>
			</section>

			<section className="slider-container">
				{slides.map((slide, index) => (
					<div
						key={index}
						className="slide"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						<div className="slide-content">
							<h1>{slide.title}</h1>
							<br />
							<p>{slide.content}</p>
						</div>
						<div className="slide-content2">
							<img src={slide.image} alt={slide.title} />
						</div>
					</div>
				))}

				<button className="nav-button prev" onClick={goToPrevious}>
					&#10094;
				</button>
				<button className="nav-button next" onClick={goToNext}>
					&#10095;
				</button>
			</section>
			<br />
			<br />
			<br />
			<br />
			<br />
			<Map />
			<br />
		</section>
	);
}

export default Mountian;
