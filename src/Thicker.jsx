import React, { useEffect, useState } from "react";

const Thicker = () => {
	const [dateTime, setDateTime] = useState("");
	const [location, setLocation] = useState("");

	useEffect(() => {
		// Update date and time every second
		const interval = setInterval(() => {
			const now = new Date();
			setDateTime(now.toLocaleString());
		}, 1000);

		// Get user's location
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
				},
				(error) => {
					setLocation("Location access denied");
				}
			);
		} else {
			setLocation("Geolocation not supported");
		}

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	return (
		<div style={styles.tickerContainer}>
			<marquee>
				<span>{`Current Date and Time: ${dateTime}   |    Location: ${location}`}</span>
			</marquee>
		</div>
	);
};

const styles = {
	tickerContainer: {
		position: "fixed",
		bottom: 0,
		left: 0,
		width: "100%",
		backgroundColor: "#333",
		color: "#fff",
		padding: "10px",
		fontSize: "16px",
		whiteSpace: "nowrap",
	},
};

export default Thicker;
