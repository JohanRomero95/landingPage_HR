import { useState } from "react";
import "./Services.css";

export default function ServiceCard({ icon: Icon, title, description, more }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
		setIsClosing(false);
	};

	const closeModal = () => {
		setIsClosing(true);
		setTimeout(() => setIsModalOpen(false), 300); // Espera la duración de la animación
	};

	return (
		<>
			{/* Card */}
			<div className="rounded-3xl shadow-md p-8 hover:shadow-xl cursor-pointer transition-shadow flex flex-col justify-between">
				<div className="mb-5">
					<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-7">
						<Icon className="w-6 h-w-6 text-white" />
					</div>
					<div className="h-[64px] mb-5">
						<h3 className="text-2xl font-bold text-gray-800">{title}</h3>
					</div>
					<p className="text-gray-600 mb-5 whitespace-pre-line">{description}</p>
					<ul className="text-gray-600 list-disc list-inside space-y-1 mb-6">
						{more.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
				<button
					onClick={openModal}
					className="text-start text-blue-600 font-semibold hover:text-blue-700">
					Learn More →
				</button>
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div
						className={`bg-white rounded-lg p-8 max-w-lg w-full transform transition-transform duration-300 ${
							isClosing ? "animate-zoom-out" : "animate-zoom-in"
						}`}>
						<div className="flex justify-between my-6 mx-5">
							<h3 className="text-2xl font-bold text-gray-800 w-80">{title}</h3>
							<button
								onClick={closeModal}
								className="text-gray-500 hover:text-gray-700 hover:bg-slate-100 h-10 w-10 rounded-full">
								✕
							</button>
						</div>
						<p className="text-gray-600 mb-4 whitespace-pre-line mx-5">{description}</p>
						<ul className="text-gray-600 list-disc list-inside space-y-1 mx-5 mb-5">
							{more.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<div className="flex justify-center">
							<button
								onClick={closeModal}
								className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
