import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

export default function ServiceCard({ icon: Icon, title, description, more, index }) {
	let animationClass = "";
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const cardRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		setIsClosing(false);
	};

	const closeModal = () => {
		setIsClosing(true);
		setTimeout(() => setIsModalOpen(false), 300);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{
				threshold: 0.2,
			},
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	if (isVisible) {
		if (index === 1) {
			animationClass = "animate-middle";
		} else if (index === 0) {
			animationClass = "animate-side-left";
		} else if (index === 2) {
			animationClass = "animate-side-right";
		}
	}

	return (
		<>
			<div
				ref={cardRef}
				className={`text-[16px] rounded-3xl shadow-md p-8 hover:shadow-xl cursor-pointer transition-shadow flex flex-col justify-between border-2 ${animationClass}`}>
				<div className="mb-5">
					<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-7">
						<Icon className="w-6 h-6 text-white" />
					</div>
					<div className="h-[64px] mb-5">
						<h3 className="text-2xl font-bold text-gray-800">{title}</h3>
					</div>
					<p className="text-gray-600 mb-5 whitespace-pre-line">{description}</p>
					<ul className="text-gray-600 list-disc list-inside space-y-1 mb-6">
						{more.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				</div>
				<button
					onClick={openModal}
					className="max-md:hidden shadow-lg w-fit bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out">
					Leer más →
				</button>
			</div>

			{isModalOpen && (
				<div className="text-[16px] fixed inset-0 flex items-center justify-center bg-white z-50">
					<div
						className={`backdrop-blur-xl shadow-xl border-2 rounded-3xl p-8 max-w-xl w-full transform transition-transform duration-300 ${
							isClosing ? "animate-zoom-out" : "animate-zoom-in"
						}`}>
						<div className="flex justify-between my-6 mx-5">
							<h3 className="text-2xl font-bold text-gray-800 w-80">{title}</h3>
							<button
								onClick={closeModal}
								className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 h-10 w-10 rounded-full transition-all duration-300 ease-in-out bg-slate-100">
								✕
							</button>
						</div>
						<p className="text-gray-600 mb-4 whitespace-pre-line mx-5">{description}</p>
						<ul className="text-gray-600 list-disc list-inside space-y-1 mx-5 mb-5">
							{more.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>
						<div className="flex justify-center">
							<button
								onClick={closeModal}
								className="max-md:hidden shadow-lg bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
