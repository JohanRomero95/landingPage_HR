import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
	{
		name: "Cornelio Saavedra",
		role: "Co-Founder Lidz | Proptech | Real estate services",
		image: "https://media.licdn.com/dms/image/v2/C4E03AQEBTmyYOIwZIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1536869870586?e=1736380800&v=beta&t=JW5AZD1kVoPzTMeJxTk-_V6_NyqBqJCpjZPDem4LwkM",
		quote: "Su trabajo ha sido clave, ya que el proceso de búsqueda y selección de colaboradores requiere tanto especialización como una gran dedicación. Nos sentimos confiados en poder externalizar este aspecto clave para nuestro crecimiento.",
		link: "https://www.linkedin.com/in/cornelio-saavedra-39256b53?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVcTLbcf9Rzuxe2qvoo8%2F7Q%3D%3D",
		// Ceci nos brindó un apoyo fundamental en diversos procesos de HR, creando un esquema específicamente adaptado a nuestras necesidades.
	},
	{
		name: "Eleonora Martelli Vergara",
		role: "Periodista, Jefe de Servicios Generales",
		image: "https://media.licdn.com/dms/image/v2/D4D03AQEM50_pYpCaXA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730895700211?e=1736380800&v=beta&t=oIWxRb7nyvHW8WuvhHgOqM9m9cNfRC-pmF77mV2bW5M",
		quote: "Su enfoque personalizado me ayudó no solo a estructurar mi discurso y mi CV, sino también resaltar las fortalezas clave de mi personalidad, orientándome hacia los cargos a los que me gustaría postular en el futuro. Su conocimiento y dedicación me dieron la confianza para enfrentar las entrevistas con seguridad.",
		link: "https://www.linkedin.com/in/eleonora-martelli-vergara-044b10212/",
		// "Trabajar con la Ceci fue una experiencia increíble. Su enfoque personalizado me ayudó no solo a estructurar mi discurso y mejorar mi CV, sino también a resaltar las fortalezas clave de mi personalidad, orientándome hacia los cargos a los que me gustaría postular en el futuro. Su conocimiento y dedicación me dieron la confianza necesaria para enfrentar las entrevistas con seguridad. Recomiendo sus servicios a cualquiera que quiera dar el siguiente paso en su carrera."
	},
	{
		name: "Raimundo Zalaquett",
		role: "Ingeniero Comercial, Business Development Inversiones, Estrategia, Startups",
		image: "https://media.licdn.com/dms/image/v2/D4E03AQFXzTDC7tO5Vg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669222750670?e=1736380800&v=beta&t=wMA9JtnSThYh_CcJLNAQDuf716eg-6G7SqR09AqXJKI",
		quote: "Ceci, una genia. Su experiencia y asertividad me ayudaron a construir un relato sólido de mi carrera profesional, sobre todo siendo de un nicho bastante específico",
		link: "https://www.linkedin.com/in/raimundozalaquett?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI8xxDfvSRmufil32my28Aw%3D%3D",
	},
	{
		name: "Johan Romero",
		role: "Operations Coordinator, Lidz ia",
		image: "https://media.licdn.com/dms/image/v2/D4E03AQFR8Q4yPw2T1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720178806879?e=1735776000&v=beta&t=zP61kYSob92ERL7f19rehaElzCZYINNy19au2ZBGFYo",
		quote: "Fue clave su asesoría, mejoró la eficiencia del equipo y mi liderazgo, logrando operaciones más fluidas y fortaleciendo mi desarrollo profesional.",
		link: "https://www.linkedin.com/in/johanromero95",
	},
	// {
	// 	name: "Sarah Johnson",
	// 	role: "HR Director, Tech Corp",
	// 	image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
	// 	quote: "Working with HR Solutions transformed our recruitment process. We've seen a 40% improvement in employee retention since implementing their strategies.",
	// 	link: "#",
	// },

	// {
	// 	name: "Michael Chen",
	// 	role: "CEO, Innovation Labs",
	// 	image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
	// 	quote: "Their expertise in HR management has been invaluable. They helped us build a culture that attracts top talent and keeps them engaged.",
	// 	link: "#",
	// },
];

const NextArrow = ({ onClick }) => {
	return (
		<div
			className="absolute bottom-0 right-[50px] xs:right-6 transform -translate-y-1/2 border-[1px] hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out border-slate-300 text-slate-400 rounded-full cursor-pointer z-10 w-10 h-10 flex items-center justify-center"
			alt="Botón slider derecha"
			title="Botón slider derecha"
			onClick={onClick}>
			➔
		</div>
	);
};

const PrevArrow = ({ onClick }) => {
	return (
		<div
			className="absolute bottom-0 right-[100px] xs:right-[70px] transform -translate-y-1/2 border-[1px] hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out border-slate-300 text-slate-400 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 rotate-180"
			alt="Botón slider izquierdo"
			title="Botón slider izquierdo"
			onClick={onClick}>
			➔
		</div>
	);
};
const handleCardClick = (link) => {
	window.open(link, "_blank");
};

export default function Testimonials() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: true,
		useCSS: "true",
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<section className="text-[16px] py-16 bg-gray-100" id="testimonials">
			<div className="container mx-auto px-0 cursor-grab">
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div className="px-3" key={index}>
							<article
								onClick={() => handleCardClick(testimonial.link)}
								className="rounded-3xl mx-10 xs:mx-4 my-16 py-10 cursor-pointer mb-20 group">
								<header className="flex gap-3">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-14 h-14 rounded-full"
										title={testimonial.name}
										loading="lazy"
									/>
									<div className="mb-8 h-20">
										<p className="text-lg font-semibold">{testimonial.name}</p>
										<p className="text-blue-600 lg:text-xs xl:text-base">
											{testimonial.role}
										</p>
									</div>
								</header>

								<div>
									<p className="text-gray-700 mb-10 xl:h-28 xs:h-40 lg:text-sm lg:h-44">
										"{testimonial.quote}"
									</p>
									<hr className="group-hover:border-blue-500 transition-colors duration-300" />
								</div>
							</article>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
