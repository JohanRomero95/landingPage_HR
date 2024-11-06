import { useState, useEffect } from "react";
import foto1 from "../../assets/photos/13053.jpg";
import foto2 from "../../assets/photos/2148407516.jpg";
import foto3 from "../../assets/photos/2148431344.jpg";
import "./Information.css";
import ModalZcal from "../Modal/ModalZcal";

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
			}, 2500); // Tiempo de desvanecimiento en ms
		}, 5000); // Tiempo total entre cada cambio

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative top-[90px] xs:top-0 xs:px-6">
			<div className="xs:flex-col flex items-stretch gap-4 py-28 xs:py-14 md:py-14 md:px-[2em] lg:px-[2em] xl:px-[6em] 2xl:px-[13em]">
				<div className="w-[80%] xs:w-full">
					<h1 className="text-[65px] font-medium mb-10 animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out leading-tight xs:text-4xl xs:w-fit xs:mb-5 md:text-5xl">
						El talento es <br />
						nuestro foco
					</h1>
					<p className="mb-10 mr-16 text-lg xs:text-base xs:mb-5 xs:mr-0 md:text-lg md:mr-2">
						Nos dedicamos a potenciar e impulsar el talento a través de asesorías
						personalizadas tanto para individuos que buscan destacar en el competitivo mundo
						laboral, como a empresas que desean construir una cultura organizacional sólida,
						con un equipo comprometido y alineado con su visión.
					</p>
					{/* <ModalZcal call="¡No esperes más!" /> */}
				</div>
				<div className="relative w-full xl:h-[500px] overflow-hidden drop-shadow-lg xs:h-[300px] lg:h-[400px]">
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
