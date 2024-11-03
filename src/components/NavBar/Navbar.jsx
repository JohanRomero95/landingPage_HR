import { Users } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="fixed w-full bg-transparent backdrop-blur-lg z-50 shadow-sm pt-5">
			<div className="container mx-auto px-6">
				<div className="flex items-center justify-between rounded-2xl px-5 py-3 bg-white">
					<div className="flex items-center gap-2" href="#">
						<Users className="w-8 h-8 text-blue-600" />
						<span className="text-xl font-bold text-gray-900">CeciUndurraga</span>
					</div>

					<div className="hidden md:flex items-center gap-10">
						<a
							href="#about"
							className="button text-gray-600 mx-2 transition-all duration-300">
							Acerca de
						</a>
						<a
							href="#service"
							className="button text-gray-600 mx-2 transition-all duration-300">
							Servicios
						</a>
						<a
							href="#testimonials"
							className="button text-gray-600 mx-2 transition-all duration-300">
							Blog
						</a>
						<a
							href="#contact"
							className="button text-gray-600 mx-2 transition-all duration-300">
							Contacto
						</a>
					</div>
					<button className="max-md:hidden bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out ">
						¡Hablemos!
					</button>

					<button className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:rounded-3xl px-5 py-2  transition-colors">
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
			</div>
		</nav>
	);
}
