import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import ModalZcal from "../Modal/ModalZcal";

export default function Footer() {
	return (
		<footer className="bg-gray-100 text-gray-300">
			<div className="container mx-auto px-6 pb-12 sm:px-12">
				<ModalZcal call="¡Conversemos!" />
				<hr className="border-gray-600 my-8" />

				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex space-x-4 justify-center items-center xs:mb-5">
						<a
							href="https://www.instagram.com/ceciundurraga/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Ir a la página de Instagram"
							title="Ir a la página de Instagram">
							<FaInstagram className="text-2xl text-gray-600 hover:text-amber-900 transition-all duration-300 ease-in-out" />
						</a>
						<a
							href="https://wa.me/56982690613"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Ir a WhatsApp"
							title="Ir a WhatsApp">
							<FaWhatsapp className="text-2xl text-gray-600 hover:text-green-600 transition-all duration-300 ease-in-out" />
						</a>
						<a
							href="mailto:ceciundurraga@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Enviar mail"
							title="Enviar mail">
							<IoMailOpenOutline className="text-2xl text-gray-600 hover:text-red-600 transition-all duration-300 ease-in-out" />
						</a>
						<a
							href="https://www.linkedin.com/in/cecilia-undurraga"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Ir a la página de LinkedIn"
							title="Ir a la página de LinkedIn">
							<FaLinkedinIn className="text-2xl text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out" />
						</a>
					</div>
					<div className="mb-4 md:mb-0">
						<ul className="flex space-x-4">
							<li>
								<a
									href="https://johanromero.vercel.app"
									className="text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out text-sm"
									target="_blank"
									rel="noopener noreferrer">
									© 2024 JR Company. Todos los derechos reservados
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
