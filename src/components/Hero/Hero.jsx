import ModalZcal from "../Modal/ModalZcal";
import particle from "../../assets/photos/colorful-abstract-wave-on-transparent-background-png.webp";
import "animate.css";

export default function Hero() {
	return (
		<section className="relative h-[100dvh] flex items-center overflow-hidden">
			<div className="absolute z-0 right-0 pr-[9em]">
				<img
					src={particle}
					alt=""
					className="w-[900px] rounded-t-full rotate-90 xs:absolute xs:right-0 xs:h-[100px] xs:scale-[5] xs:overflow-x-hidden md:right-0 md:absolute md:scale-[7] md:mr-32 lg:scale-[9] lg:mr-52"
				/>
				{/* <img
					src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
					alt="Office"
					className="w-full h-full object-cover brightness-50"
				/> */}
			</div>
			<div className="container mx-auto px-6 relative z-10 mt-48">
				<div className="max-w-3xl text-gray-800">
					<h1 className="text-[70px] leading-tight font-medium mb-28 animate__animated animate__fadeInUp animate__slower xxs:text-[22px] xs:text-5xl xs:mb-10 xs:-mt-20 lg:mb-20">
						Potenciamos tu talento, transformamos tu organización
					</h1>
					<p className="text-xl mb-6 animate__animated animate__fadeInUp animate__slower max-sm:text-base w-[500px] xs:w-44 xs:mb-10 xs:text-lg">
						Tenemos la convicción que el talento es el motor de cualquier organización
						exitosa.
					</p>

					<ModalZcal call="¡Hablemos!" />
				</div>
			</div>
		</section>
	);
}
