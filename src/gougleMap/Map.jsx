import React from "react";
import './map.css'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
function Map() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "YOUR_API_KEY", // Replace with your actual API key
	});

	const locations = [
		{ lat: 27.9881, lng: 86.925, title: "Mt. Everest" }, // Example location
		{ lat: -35.6751, lng: -71.543, title: "Andes" }, // Another example location
		{ lat: -9.7545039, lng: 9.0584911, title: "Gora Tip Tyav" },
	];

	const stories = [
		{
			title: "Summit of Mt. Everest",
			location: "Nepal",
			date: "May 2023",
			description:
				"A successful expedition to the highest peak in the world",
		},
		{
			title: "Journey through the Andes",
			location: "Chile",
			date: "March 2022",
			description:
				"An unforgettable experience exploring the stunning Andes mountains",
		},

		{
			title: "Marathon through Gora Tip Tyav ",
			location: "Samara",
			date: "March 2022",
			description:
				"An unforgettable and fun experience racing through theGora Tip Tyav mountian ",
		},
		// Add more stories as needed
	];

	return (
		<div className="app-container">
			<h1>Mountaineering Clubs and Locations</h1>
			<br />

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37130587.44153236!2d-21.52063208847936!3d55.388173701978154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1729593046119!5m2!1sen!2sng"
				width="100%" // Make it responsive by using percentage
				height="450"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<br />
			<br />
			<br />
			<h2 style={{ textAlign: "center" }}>Success Stories</h2>
			<br />
			<div className="stories-container">
				{stories.map((story, index) => (
					<div key={index} className="story-card">
						<h3>{story.title}</h3>
						<p>
							<strong>Location:</strong> {story.location}
						</p>
						<p>
							<strong>Date:</strong> {story.date}
						</p>
						<p>{story.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Map;
