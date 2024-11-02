import { useState, useEffect } from "react";
import foto1 from "../../assets/photos/13053.jpg";
import foto2 from "../../assets/photos/2148407516.jpg";
import foto3 from "../../assets/photos/2148431344.jpg";
import "./Information.css";

const photos = [foto1, foto2, foto3];

const Information = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fadeStyle, setFadeStyle] = useState({ opacity: 1, transition: "opacity 2s ease-in-out" });

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeStyle({ opacity: 0, transition: "opacity 2s ease-in-out" });

			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
				setFadeStyle({ opacity: 1, transition: "opacity 1s ease-in-out" }); // Restablece la opacidad para la siguiente imagen
			}, 1500); // Tiempo de desvanecimiento en ms
		}, 6000); // Tiempo total entre cada cambio

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative top-[90px]">
			<div className="flex items-stretch gap-4 px-[6em] py-24">
				<div className="w-[80%]">
					<h1 className="text-[65px] font-medium mb-10 animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out leading-tight">
						El talento es <br />
						nuestro foco
					</h1>
					<p className="mb-10 mr-16 text-lg">
						Nos dedicamos a potenciar e impulsar el talento a través de asesorías
						personalizadas tanto para individuos que buscan destacar en el competitivo mundo
						laboral, como a empresas que desean construir una cultura organizacional sólida,
						con un equipo comprometido y alineado con su visión.
					</p>
					<button className="max-md:hidden bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-14 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out ">
						¡No esperes más!
					</button>
				</div>
				<div className="relative w-full h-[500px] overflow-hidden drop-shadow-lg">
					<img
						src={photos[currentIndex]}
						alt=""
						style={{ ...fadeStyle }}
						className="absolute inset-0 w-full h-full rounded-2xl cursor-pointer object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Information;
