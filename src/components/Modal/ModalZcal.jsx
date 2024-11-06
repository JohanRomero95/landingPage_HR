import { useState, useEffect } from "react";

const ModalZcal = ({ call }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		setIsClosing(false);
		document.body.style.overflow = "hidden"; // Bloquea el scroll
	};

	const closeModal = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsModalOpen(false);
			document.body.style.overflow = "auto"; // Restaura el scroll
		}, 300); // Espera la duración de la animación
	};

	// Para asegurarte de que el scroll se restaure si el componente se desmonta
	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div>
			<button
				onClick={openModal}
				className="max-md:hidden shadow-lg bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-14 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out text-[16px]">
				{call}
			</button>

			{isModalOpen && (
				<div
					className="fixed inset-0 bg-white backdrop-blur-md flex items-center justify-center z-[10000]"
					onClick={closeModal}>
					<div
						className={`w-[1200px] mt-20 ${
							isClosing ? "animate-zoom-out" : "animate-zoom-in"
						}`}
						onClick={(e) => e.stopPropagation()}>
						<iframe
							src="https://zcal.co/i/pmHDjkhB?embed=1&embedType=iframe"
							loading="lazy"
							style={{
								border: "none",
								minWidth: "320px",
								minHeight: "544px",
								height: "865px",
								width: "100%",
							}}
							id="zcal-invite"
							title="Zcal Schedule"></iframe>
						<button
							onClick={closeModal}
							className="flex items-center justify-center absolute xs:top-[20%] lg:top-[50%] xs:right-10 md:right-20 md:top-56 -right-10 text-gray-500 hover:text-gray-700 hover:bg-gray-200 bg-slate-100 rounded-full h-16 w-16 xs:h-10 xs:w-10 text-xl">
							X
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalZcal;
