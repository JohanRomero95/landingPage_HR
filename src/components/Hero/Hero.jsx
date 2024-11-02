import ModalZcal from "../Modal/ModalZcal";

export default function Hero() {
	return (
		<section className="relative h-[100dvh] flex items-center">
			<div className="absolute inset-0 z-0">
				<img
					src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
					alt="Office"
					className="w-full h-full object-cover brightness-50"
				/>
			</div>
			<div className="container mx-auto px-6 relative z-10 mt-56">
				<div className="max-w-3xl text-white">
					<h1 className="text-6xl font-medium mb-28 animate-fade-up animate-once animate-duration-[1500ms] animate-ease-in-out">
						Potenciamos tu talento, transformamos tu organización
					</h1>
					<p className="text-xl mb-6">
						Tenemos la convicción que el talento es el motor de <br />
						cualquier organización exitosa.
					</p>
					{/* <button className="max-md:hidden bg-blue-600 hover:bg-blue-700 hover:rounded-3xl text-white px-14 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out">
						¡Hablemos!
					</button> */}
					<ModalZcal call="¡Hablemos!" />
				</div>
			</div>
		</section>
	);
}
