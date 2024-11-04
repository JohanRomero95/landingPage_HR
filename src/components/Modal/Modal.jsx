import React, { useState } from "react";

const Modal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="App">
			<button onClick={openModal} className="open-modal-button">
				Abrir Modal
			</button>

			{isModalOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button onClick={closeModal} className="close-modal-button">
							Cerrar
						</button>
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
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
