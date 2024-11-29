import { useState, useEffect } from "react";
import foto1 from "../../assets/photos/13053.webp";
import foto2 from "../../assets/photos/liviana1.webp";
import foto3 from "../../assets/photos/2148431344.jpg";
import foto4 from "../../assets/photos/2149328316_liviana.webp";
// import ModalZcal from "../Modal/ModalZcal";
import ModalForm from "../Modal/ModalForm";

const photos = [foto1, foto2, foto3, foto4];

const Information = () => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fadeStyle, setFadeStyle] = useState({ opacity: 1, transition: "opacity 2s ease-in-out" });
	const [isModalVisible, setIsModalVisible] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsModalVisible(false);
			} else {
				setIsModalVisible(true);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setFadeStyle({ opacity: 0, transition: "opacity 2s ease-in-out" });

			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
				setFadeStyle({ opacity: 1, transition: "opacity 1s ease-in-out" }); //
			}, 2500);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative top-[90px] xs:top-0 xs:px-6">
			<div className="xs:flex-col flex items-stretch gap-4 py-28 xs:py-14 md:py-14 md:px-[2em] lg:px-[2em] xl:px-[2em] xxl:px-[10em] 2xl:mx-[12em]">
				<div className="w-[80%] xs:w-full">
					<h1 className="text-[65px] text-gray-900 font-semibold mb-10 animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out leading-tight xs:text-4xl xs:w-fit xs:mb-5 md:text-5xl">
						El talento, mi norte.
					</h1>
					<p className="mb-10 xs:text-xs text-gray-600 xs:mb-5 xs:mr-0 md:text-base md:mr-2 xl:w-2/3">
						Con 12 años de trayectoria profesional, he llegado a la conclusión que en muchas
						empresas la visión de poner al talento en el centro de la cultura organizacional a
						menudo fracasa o se ve limitada por la falta de recursos y estructuras adecuadas.
						Con el objetivo de apoyar a las empresas a optimizar la gestión de su talento, me
						dedico a la consultoría en Recursos Humanos, ofreciendo soluciones flexibles y
						adaptadas a sus necesidades.
					</p>
					{isModalVisible && <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />}
					<button
						onClick={handleOpenModal}
						className="max-md:hidden shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-14 py-4 rounded-lg hover:rounded-3xl font-semibold transition-all duration-300 ease-in-out text-[16px] xs:hidden">
						¡No esperes más!
					</button>
				</div>
				<div className="relative w-full xl:h-[500px] overflow-hidden drop-shadow-lg xs:h-[300px] lg:h-[400px]">
					<img
						src={photos[currentIndex]}
						alt="HR | People & Culture"
						title="HR | People & Culture"
						loading="lazy"
						style={{ ...fadeStyle }}
						className="absolute inset-0 w-full h-full rounded-3xl cursor-pointer object-cover "
					/>
				</div>
			</div>
		</section>
	);
};

export default Information;
