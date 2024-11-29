import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ModalZcal = ({ call }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		setIsClosing(false);
		document.body.style.overflow = "hidden";
	};

	const closeModal = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsModalOpen(false);
			document.body.style.overflow = "auto";
		}, 300);
	};

	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const modalContent = (
		<div
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]"
			onClick={closeModal}>
			<div
				className={`bg-white rounded-3xl w-[90%] max-w-[55%] xs:max-w-[90%] md:max-w-[1100px] md:h-[98%] h-[94%] flex flex-col relative overflow-hidden ${
					isClosing ? "animate-zoom-out" : "animate-zoom-in"
				}`}
				onClick={(e) => e.stopPropagation()}>
				<button
					onClick={closeModal}
					className="absolute top-8 right-8 xs:top-40 xs:right-10 md:w-16 md:h-16 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300">
					X
				</button>

				<iframe
					src="https://zcal.co/i/pmHDjkhB?embed=1&embedType=iframe"
					loading="lazy"
					style={{
						border: "none",
						width: "100%",
						height: "100%",
					}}
					id="zcal-invite"
					title="Agenda reunión"></iframe>
			</div>
		</div>
	);

	return (
		<div>
			<button
				onClick={openModal}
				className="max-md:hidden shadow-lg bg-blue-600 hover:bg-blue-700 text-white px-14 py-4 rounded-lg hover:rounded-3xl font-semibold transition-all duration-300 ease-in-out text-[16px] xs:px-6 xs:py-3">
				{call}
			</button>

			{isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
		</div>
	);
};

export default ModalZcal;
