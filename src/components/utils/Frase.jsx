import { useState, useEffect, forwardRef } from "react";
import "../../styles/index.css";

const Frase = forwardRef((props, ref) => {
	const frases = [
		"Optimiza la gestión de personas.",
		"Potencia tu talento",
		"Impulsa la cultura de tu organización.",
	];

	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [fadeClass, setFadeClass] = useState("fade-in-up");

	useEffect(() => {
		const phraseInterval = setInterval(() => {
			setFadeClass("");
			setTimeout(() => {
				setCurrentPhraseIndex((prevIndex) =>
					prevIndex === frases.length - 1 ? 0 : prevIndex + 1,
				);
				setFadeClass("fade-in-up"); //
			}, 1000);
		}, 5000);

		return () => clearInterval(phraseInterval);
	}, [frases.length]);

	return (
		<div ref={ref} className="frase-container">
			<h1 key={currentPhraseIndex} className={fadeClass}>
				{frases[currentPhraseIndex]}
			</h1>
		</div>
	);
});

export default Frase;
