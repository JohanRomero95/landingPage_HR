import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import foto1 from "../../assets/photos/miniaturas_testimonios/consuelo_arraztoa.webp";
import foto2 from "../../assets/photos/miniaturas_testimonios/cornelio_saavedra.jpg";
import foto3 from "../../assets/photos/miniaturas_testimonios/eleonora_martelli.webp";
import foto4 from "../../assets/photos/miniaturas_testimonios/johan_romero.webp";
import foto5 from "../../assets/photos/miniaturas_testimonios/raimundo_zalaquett.webp";

const testimonials = [
	{
		name: "Cornelio Saavedra",
		role: "Co-Founder Lidz | Proptech | Real estate services",
		image: foto2,
		quote: "Su trabajo ha sido clave, ya que el proceso de búsqueda y selección de colaboradores requiere tanto especialización como una gran dedicación. Nos sentimos confiados en poder externalizar este aspecto clave para nuestro crecimiento.",
		link: "https://www.linkedin.com/in/cornelio-saavedra-39256b53?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVcTLbcf9Rzuxe2qvoo8%2F7Q%3D%3D",
	},
	{
		name: "Eleonora Martelli Vergara",
		role: "Periodista, Jefe de Servicios Generales",
		image: foto3,
		quote: "Su enfoque personalizado me ayudó no solo a estructurar mi discurso y mi CV, sino también resaltar las fortalezas clave de mi personalidad, orientándome hacia los cargos a los que me gustaría postular en el futuro. Su conocimiento y dedicación me dieron la confianza para enfrentar las entrevistas con seguridad.",
		link: "https://www.linkedin.com/in/eleonora-martelli-vergara-044b10212/",
	},
	{
		name: "Raimundo Zalaquett",
		role: "Ingeniero Comercial, Business Development Inversiones, Estrategia, Startups",
		image: foto5,
		quote: "Ceci, una genia. Su experiencia y asertividad me ayudaron a construir un relato sólido de mi carrera profesional, sobre todo siendo de un nicho bastante específico",
		link: "https://www.linkedin.com/in/raimundozalaquett?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BI8xxDfvSRmufil32my28Aw%3D%3D",
	},
	{
		name: "Consuelo Arraztoa",
		role: "Gestión de Proyectos | Alianzas Estratégicas | Desarrollo de Negocios | Marketing",
		image: foto1,
		quote: "Super amigable y cercana, se maneja en el tema, da buenos tips.",
		link: "https://www.linkedin.com/in/consuelo-arraztoa-fuentes/",
	},
	{
		name: "Johan Romero",
		role: "Operations Coordinator, Lidz ia",
		image: foto4,
		quote: "Fue clave su asesoría, mejoró la eficiencia del equipo y mi liderazgo, logrando operaciones más fluidas y fortaleciendo mi desarrollo profesional.",
		link: "https://www.linkedin.com/in/johanromero95",
	},
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
