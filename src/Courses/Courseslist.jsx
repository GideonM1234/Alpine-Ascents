import React from "react";
import { List } from "./couses";
import "../Courses/courses.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Blogs from "../Blogs/Blogs";
function Courseslist() {
	 useEffect(() => {
			AOS.init({
				duration: 1200, // Customize the duration of the animation
			});
		}, []);
	return (
		<section id="main-core">
			<h1 style={{ textAlign: "center", fontSize: "33px" }}>
				Expenditions
			</h1>
			<br />

			<section data-aos="fade-up" className="cores">
				{List.map((lists) => (
					<div className="List-cont" key={lists.id}>
						<img src={lists.Img} alt="" />
						<div className="content">
							<div className="pp">
								<div>
									<p>{lists.destination}</p>
								</div>

								<div>
									<p>{lists.kilometer}</p>
								</div>
							</div>

							<div className="xx">
								<div>
									<p>{lists.dateofgoing}</p>
								</div>

								<div>
									<button className="btn">View </button>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
			<br />

			<Blogs />
		</section>
	);
}

export default Courseslist;
	