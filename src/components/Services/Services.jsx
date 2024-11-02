import { Users, Building2, HeartHandshake } from "lucide-react";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		icon: Users,
		title: "Asesoría para Talentos",
		description:
			"Entendemos que la búsqueda de empleo puede ser un proceso desafiante que requiere de mucha preparación y dedicación.\n" +
			"\n" +
			"Aquí te ayudamos de manera concreta y simple a preparar algunos puntos claves.",
		more: [
			"Preparación para entrevistas laborales",
			"Personal storytelling",
			"Diseño y Optimización de CV y LinkedIn",
		],
	},
	{
		icon: Building2,
		title: "Formación y Desarrollo de Talento en las Empresas",
		description:
			"Apoyamos a las empresas con asesoría especializada y personalizada en formación y desarrollo de sus talentos porque sabemos el profundo impacto que esto genera en la cultura organizacional y el éxito a largo plazo.",
		more: [
			<>
				<strong>Workshops:</strong> diseñamos talleres interactivos.
			</>,
			<>
				<strong>Mentoría:</strong> trabajo personalizado en temáticas puntuales.
			</>,
			<>
				<strong>Microlearning:</strong> desarrollamos contenido digital a tu medida para
				facilitar el aprendizaje continuo en lecciones breves y accesibles.
			</>,
		],
	},
	{
		icon: HeartHandshake,
		title: "Atracción y Retención de Talento",
		description:
			"Ayudamos a buscar al mejor talento de acuerdo a las necesidades de cada empresa.\n" +
			"\n" +
			"Además, apoyamos con asesoría en áreas clave para asegurar la mejor experiencia durante el proceso de atracción, onboarding y retención del talento.",
		more: [
			"Diseño de la cultura organizacional.",
			"Diseño del proceso de selección y onboarding.",
		],
	},
];

export default function Services() {
	return (
		<section className="py-20" id="services">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-3 gap-8">
					{servicesData.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>
			</div>
		</section>
	);
}
