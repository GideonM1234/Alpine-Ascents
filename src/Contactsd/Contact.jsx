import React from "react";
import "./contacct.css";
function Contact() {
	return (
		<section id="foot">
			<section className="Contact-us">
				<div className="C-1">
					<h1>Contact Us</h1>
					<br />
					<p>
						At Alpine Ascents, we’re here to help you on your
						mountaineering journey! Whether you have questions about
						our courses, want to learn more about our guided
						expeditions, or need assistance planning your next
						adventure, feel free to reach out. Our team is available
						to provide expert advice and ensure you have all the
						information you need. Simply fill out the form below or
						contact us directly, and we’ll get back to you as soon
						as possible
					</p>
					<br />

					<span>
						<i class="bx bxl-instagram-alt"></i>
						<i class="bx bxl-twitter"></i>
						<i class="bx bxl-tiktok"></i>
						<i class="bx bxl-facebook"></i>
					</span>
				</div>

				<div className="C-2">
					<div>
						<label htmlFor="">Name:</label>
						<br />
						<input
							type="text"
							placeholder="Enter Your Name"
							className="inp1"
						/>
					</div>
					<br />

					<div>
						<label htmlFor=" ">Email:</label>
						<br />
						<input
							type="email"
							placeholder="Enter Your Email"
							className="inp2"
						/>
					</div>
					<br />

					<div>
						<textarea
							name=""
							id=""
							placeholder="Enter a Message"
							className="inp3"
						></textarea>
					</div>
					<br />

					<button className="btn" type="submit">Submit</button>
				</div>
			</section>
			<div className="rigth">

				<p className="bb"></p><br />
				<p>&copy; 2024 Alpine Ascents. all right reseved</p>
			</div><br /><br /><br />
		</section>
	);
}

export default Contact;
