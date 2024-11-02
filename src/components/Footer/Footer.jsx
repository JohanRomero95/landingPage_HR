import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import ModalZcal from "../Modal/ModalZcal";

export default function Footer() {
	return (
		<footer className="bg-gray-100 text-gray-300">
			<div className="container mx-auto px-6 pb-12">
				<ModalZcal call="¡Conversemos!" />
				{/* <button className="max-md:hidden bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-14 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out">
					¡Conversemos!
				</button> */}
				{/* <div className="grid grid-cols-6 gap-8">
					<div className="col-span-6 md:col-span-2 mb-8">
						<div className="flex items-center gap-2 text-white mb-4">
							<Users className="w-8 h-8" />
							<span className="text-xl font-bold">HR Solutions</span>
						</div>
						<p className="text-gray-400">
							Transforming workplaces through innovative human resource solutions.
						</p>
					</div>

					{columns.map((column, index) => (
						<FooterColumn key={index} {...column} />
					))}
				</div> */}

				<hr className="border-gray-600 my-8" />

				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex space-x-4 justify-center items-center">
						<a href="https://www.instagram.com/ceciundurraga/" target="_blank">
							<FaInstagram className="text-2xl text-gray-600 hover:text-amber-900 transition-all duration-300 ease-in-out" />
						</a>
						<a href="https://wa.me/56982690613" target="_blank">
							<FaWhatsapp className="text-2xl text-gray-600 hover:text-green-600 transition-all duration-300 ease-in-out" />
						</a>
						<a href="mailto:ceciundurraga@gmail.com" target="_blank">
							<IoMailOpenOutline className="text-2xl text-gray-600 hover:text-red-600 transition-all duration-300 ease-in-out" />
						</a>
						<a href="https://www.linkedin.com/in/cecilia-undurraga" target="_blank">
							<FaLinkedinIn className="text-2xl text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out" />
						</a>
						{/* <a target="_blank" className="flex items-center">
							<FaPhoneAlt className="text-lg" />
							+56982690613
						</a> */}
					</div>
					<div className="mb-4 md:mb-0">
						<ul className="flex space-x-4">
							<li>
								<a
									href="https://johanromero.vercel.app"
									className="text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out text-sm"
									target="_blank">
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
