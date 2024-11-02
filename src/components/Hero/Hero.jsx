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
			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-3xl text-white">
					<h1 className="text-5xl font-bold mb-6">
						Potenciamos tu talento, transformamos tu organización
					</h1>
					<p className="text-xl mb-8">
						Tenemos la convicción que el talento es el motor de cualquier organización
						exitosa.
					</p>
					<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
						¡Hablemos!
					</button>
				</div>
			</div>
		</section>
	);
}
