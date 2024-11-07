import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
	return (
		<button
			href="https://wa.me/56982690613"
			target="_blank"
			rel="noopener noreferrer"
			alt="Botón ir al inicio"
			title="Botón ir al inicio"
			className="fixed bottom-5 right-5 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebd59] transition duration-300">
			<FaWhatsapp className="text-white text-3xl" />
		</button>
	);
}
