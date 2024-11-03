import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "HR Director, Tech Corp",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
		quote: "Working with HR Solutions transformed our recruitment process. We've seen a 40% improvement in employee retention since implementing their strategies.",
		link: "#",
	},

	{
		name: "Michael Chen",
		role: "CEO, Innovation Labs",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
		quote: "Their expertise in HR management has been invaluable. They helped us build a culture that attracts top talent and keeps them engaged.",
		link: "#",
	},

	{
		name: "Emily Rodriguez",
		role: "Operations Manager, Global Retail",
		image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
		quote: "The employee experience programs they implemented have significantly improved our team's satisfaction and productivity.",
		link: "#",
	},

	{
		name: "Sarah Johnson",
		role: "HR Director, Tech Corp",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
		quote: "Working with HR Solutions transformed our recruitment process. We've seen a 40% improvement in employee retention since implementing their strategies.",
		link: "#",
	},

	{
		name: "Michael Chen",
		role: "CEO, Innovation Labs",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
		quote: "Their expertise in HR management has been invaluable. They helped us build a culture that attracts top talent and keeps them engaged.",
		link: "#",
	},

	{
		name: "Johan Romero",
		role: "Operations Coordinator, Lidz ia",
		image: "https://media.licdn.com/dms/image/v2/D4E03AQFR8Q4yPw2T1A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720178806879?e=1735776000&v=beta&t=zP61kYSob92ERL7f19rehaElzCZYINNy19au2ZBGFYo",
		quote: "Fue clave su asesoría, mejoró la eficiencia del equipo y mi liderazgo, logrando operaciones más fluidas y fortaleciendo mi desarrollo profesional.",
		link: "https://www.linkedin.com/in/johanromero95",
	},
];

const NextArrow = ({ onClick }) => {
	return (
		<div
			className="absolute bottom-0 right-[50px] transform -translate-y-1/2 border-[1px] hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out border-slate-300 text-slate-400 rounded-full cursor-pointer z-10 w-10 h-10 flex items-center justify-center"
			onClick={onClick}>
			➔
		</div>
	);
};

const PrevArrow = ({ onClick }) => {
	return (
		<div
			className="absolute bottom-0 right-[100px] transform -translate-y-1/2 border-[1px] hover:bg-blue-600 hover:text-slate-100 transition-all duration-300 ease-in-out border-slate-300 text-slate-400 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 rotate-180"
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
		],
	};

	return (
		<section className="py-16 bg-gray-100" id="testimonials">
			<div className="container mx-auto px-0 cursor-grab">
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div className="px-3" key={index}>
							<article
								onClick={() => handleCardClick(testimonial.link)}
								className="rounded-3xl mx-10 my-16 py-10 cursor-pointer mb-20 group">
								<header className="flex gap-3">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-14 h-14 rounded-full"
									/>
									<div className="mb-8">
										<h3 className="text-lg font-semibold">{testimonial.name}</h3>
										<p className="text-blue-600">{testimonial.role}</p>
									</div>
								</header>

								<div>
									<p className="text-gray-700 mb-10">"{testimonial.quote}"</p>
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
