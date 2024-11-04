import ModalZcal from "../Modal/ModalZcal";
import particle from "../../assets/photos/colorful-abstract-wave-on-transparent-background-png.webp";
import "animate.css";

export default function Hero() {
	return (
		<section className="relative h-[100dvh] flex items-center">
			<div className="absolute z-0 right-0 pr-[9em]">
				<img src={particle} alt="" className="w-[900px] rounded-t-full rotate-90" />
				{/* <img
					src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
					alt="Office"
					className="w-full h-full object-cover brightness-50"
				/> */}
			</div>
			<div className="container mx-auto px-6 relative z-10 mt-52">
				<div className="max-w-3xl text-gray-800">
					<h1 className="text-[70px] leading-tight font-medium mb-28 animate__animated animate__fadeInUp animate__slower">
						Potenciamos tu talento, transformamos tu organización
					</h1>
					<p className="text-xl mb-6 animate__animated animate__fadeInUp animate__slower">
						Tenemos la convicción que el talento es el motor de <br />
						cualquier organización exitosa.
					</p>

					<ModalZcal call="¡Hablemos!" />
				</div>
			</div>
		</section>
	);
}
