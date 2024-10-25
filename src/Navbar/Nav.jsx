import React, { useState } from "react";
import "./nav.css"; // Ensure the CSS file path is correct
import logo from "../assets/img/AlpineAscents logo.png"; // Ensure the image path is correct
import VisitorCounter from "../VisitorCounter";

function Nav() {
	const [isToggled, setIsToggled] = useState(false); // Initially visible
	const [activeLink, setActiveLink] = useState(""); // Track the active link

	// Handle link click, set active link, and hide dropdown
	const handleLinkClick = (e) => {
		setActiveLink(e.target.id); // Set active link based on clicked id
		setIsToggled(false); // Hide the dropdown after clicking
	};
// Track the active link

	

	return (
		<header>
			<nav className="nav">
				<div className="nav-header">
					<img src={logo} alt="Alpine Ascents Logo" />
				</div>

				<div>
					<ul className="nav-links">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a className="mm" href="#Mission">
								Mission
							</a>
						</li>
						<li>
							<a href="#Mountian-sec">Mountaineering</a>
						</li>

						<li>
							<a href="#main-core">Expeditions</a>
						</li>

						<li>
							<a href="#Blogs">Blogs</a>
						</li>
						<li>
							<a href="#foot">Contact Us</a>
						</li>
					</ul>
				</div>

				<div>
					<div>
						<VisitorCounter />
					</div>
					<button className=" btn signup-btn">Sign-Up</button>
					<button className="login-btn  btn">Log-in</button>
					<span
						onClick={() => {
							setIsToggled(!isToggled);
						}}
						aria-expanded={isToggled}
						aria-controls="Drop-Nav"
						className="menu"
					>
						<i className="bx bx-menu bx-men"></i>
					</span>
				</div>
			</nav>

			<section
				id="Drop-Nav"
				className={`dropdown-menu ${isToggled ? "active" : ""}`}
			>
				<ul className="drop-nav-links">
					<br />
					<li id="Home" onClick={handleLinkClick}>
						<a href="#">Home</a>
					</li>
					<br />
					<li id="Missions" onClick={handleLinkClick}>
						<a href="#Mission">Mission</a>
					</li>
					<br />
					<li id="Mountaineering" onClick={handleLinkClick}>
						<a href="#Mountian-sec">Mountaineering</a>
					</li>
					<br />
					<li id="Expeditions" onClick={handleLinkClick}>
						<a href="#main-core">Expeditions</a>
					</li>
					<br />
					<li id="Blogss" onClick={handleLinkClick}>
						<a href="#Blogs">Blogs</a>
					</li>
					<br />
					<li id="Contact" onClick={handleLinkClick}>
						<a href="#foot">Contact Us</a>
					</li>
				</ul>
				<br />
				<div>
					<button>Sign-up</button>
					<button>Log-in</button>
				</div>
			</section>
		</header>
	);
}

export default Nav;
