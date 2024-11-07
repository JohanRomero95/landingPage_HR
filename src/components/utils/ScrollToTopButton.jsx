import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			// Ajusta la visibilidad del botón cerca del final de la página
			if (scrolled + windowHeight >= documentHeight - 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`fixed shadow-lg bottom-20 right-7 h-12 w-12 bg-blue-600 text-white rounded-full transition-opacity duration-500 rotate-[270deg] hover:bg-blue-700 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}>
			➔
		</button>
	);
}
