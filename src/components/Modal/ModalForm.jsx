import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
// import { PiCalendar } from "react-icons/pi";

const ModalForm = ({ isOpen, onClose }) => {
	const modalRef = useRef(null);

	const handleClickOutsideModal = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutsideModal);
		} else {
			document.removeEventListener("mousedown", handleClickOutsideModal);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutsideModal);
		};
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<main className="fixed top-0 right-0 w-full h-full bg-black/50 flex justify-end z-50 ">
			<aside
				className="relative h-full z-50 min-w-[320px] xs:w-full px-1 lg:w-[500px]"
				ref={modalRef}>
				<iframe
					src="https://forms.monday.com/forms/embed/c787e1a7e70efc73fc3d6d2d0812a39e?r=use1"
					width="100%"
					height="1100"></iframe>
				<button
					onClick={onClose}
					className="absolute top-20 right-10 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full w-12 h-12 hover:bg-gray-300">
					X
				</button>
				{/* <PiCalendar /> */}
			</aside>
		</main>,
		document.getElementById("modal-root"),
	);
};

export default ModalForm;
