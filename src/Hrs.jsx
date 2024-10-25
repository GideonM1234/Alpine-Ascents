import React, { useEffect, useRef } from "react";
import video from "./assets/img/Welcome To (4).mp4";

function Hrs() {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					video.play();
				} else {
					video.pause();
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5, // 50% of the video must be visible to start playing
		});

		if (video) {
			observer.observe(video);
			// Restart video when it ends
			video.addEventListener("ended", () => {
				video.currentTime = 0; // Reset the video to the beginning
				video.play(); // Start playing again
			});
		}

		return () => {
			if (video) {
				observer.unobserve(video);
				video.removeEventListener("ended", () => {
					video.currentTime = 0;
					video.play();
				});
			}
		};
	}, []);

	return (
		<video
			className="vid"
			ref={videoRef}
			src={video}
			muted // Required to auto-play in most browsers
		/>
	);
}

export default Hrs;
