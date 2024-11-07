import { Users } from "lucide-react";
import "./Navbar.css";
import { useState } from "react";
import ModalForm from "../Modal/ModalForm";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	// Función para cerrar el modal
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="fixed w-full bg-transparent backdrop-blur-lg z-50 pt-5 max-lg:backdrop-blur-0">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between rounded-2xl px-5 py-3 bg-white shadow-2xl">
					<div
						className="flex items-center gap-2"
						onClick={scrollToTop}
						style={{ cursor: "pointer" }}>
						<Users className="w-8 h-8 text-blue-600" alt="Logotipo" title="Logotipo" />
						<span
							className="text-xl font-bold text-gray-900 md:text-md"
							alt="Ceci Undurraga"
							title="Ceci Undurraga">
							CeciUndurraga
						</span>
					</div>

					<div className="xs:hidden items-center gap-10 md:gap-0 md:flex">
						<a
							href="#information"
							className="button text-gray-600 mx-2 transition-all duration-300"
							alt="Botón información"
							title="Botón información">
							Acerca de
						</a>
						<a
							href="#service"
							className="button text-gray-600 mx-2 transition-all duration-300"
							alt="Botón servicios"
							title="Botón servicios">
							Servicios
						</a>
						<a
							href="#testimonials"
							className="button text-gray-600 mx-2 transition-all duration-300"
							alt="Botón testimonios"
							title="Botón testimonios">
							Testimonios
						</a>
					</div>

					<button
						onClick={handleOpenModal}
						className="xs:hidden shadow-lg bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-14 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out text-[16px] md:px-5 md:py-2">
						¡Hablemos!
					</button>
					<ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />

					<button
						className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:rounded-3xl py-2 transition-colors"
						onClick={toggleMenu}
						aria-label="navbar menu">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Menú móvil */}
				{isMenuOpen && (
					<div className="lg:hidden md:w-96 md:absolute md:right-6 flex flex-col items-center gap-10 bg-white shadow-2xl p-6 rounded-2xl mt-4 transition-transform duration-300">
						<a href="#information" className="text-gray-900" onClick={toggleMenu}>
							Acerca de
						</a>
						<a href="#service" className="text-gray-900" onClick={toggleMenu}>
							Servicios
						</a>
						<a href="#testimonials" className="text-gray-900" onClick={toggleMenu}>
							Testimonios
						</a>
					</div>
				)}
			</div>
		</nav>
	);
}
