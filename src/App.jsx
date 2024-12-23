import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Testimonials from "./components/Carousel/Testimonials";
import ScrollToTopButton from "./components/utils/ScrollToTopButton";
import NavBar from "./components/NavBar/Navbar";
import Frase from "./components/utils/Frase";
import WhatsAppButton from "./components/utils/Whatsapp";
import "./styles/index.css";

function App() {
	const blocksRef = useRef([]);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

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
				threshold: 0.2,
			},
		);

		blocksRef.current.forEach((block) => observer.observe(block));

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-white" id="home">
			<ScrollToTopButton />
			<NavBar />
			<div ref={(el) => blocksRef.current.push(el)} className="block">
				<Hero />
			</div>
			<div ref={(el) => blocksRef.current.push(el)} className="block" id="information">
				<Information />
			</div>
			<div ref={(el) => blocksRef.current.push(el)} className="block" id="service">
				<h2 className="text-4xl font-semibold text-center mt-32 xs:mt-8 text-gray-900 h-10 xs:h-32 xs:px-[.6em] md:px-[1em]">
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
			<WhatsAppButton />
		</div>
	);
}

export default App;
