import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Testimonials from "./components/Carousel/Testimonials";
import ScrollToTopButton from "./components/utils/ScrollToTopButton";
import "./styles/index.css";
import Frase from "./components/utils/Frase";

function App() {
	const blocksRef = useRef([]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{
				threshold: 0.3, // 30% del elemento visible para activar la animación
			},
		);

		blocksRef.current.forEach((block) => observer.observe(block));

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-white" id="home">
			<ScrollToTopButton />
			<Navbar />
			<div ref={(el) => blocksRef.current.push(el)} className="block">
				<Hero />
			</div>
			<div ref={(el) => blocksRef.current.push(el)} className="block" id="information">
				<Information />
			</div>
			<div ref={(el) => blocksRef.current.push(el)} className="block" id="service">
				<h2 className="text-4xl font-semibold text-center mt-32 text-gray-800h-10">
					<Frase />
				</h2>
			</div>
			<div ref={(el) => blocksRef.current.push(el)} className="block">
				<Services />
			</div>
			<div ref={(el) => blocksRef.current.push(el)} className="block">
				<Testimonials />
			</div>
			<Footer />
		</div>
	);
}

export default App;
