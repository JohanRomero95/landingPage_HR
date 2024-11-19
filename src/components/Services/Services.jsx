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
		subtitle: ["Ofrecemos servicios puntuales para prepararte en la etapa de cambios laborales:"],
		more: [
			"<strong>Preparación para entrevistas laborales:</strong><br> Analizamos en conjunto tu CV y te preparamos con tips concretos para enfrentar las entrevistas (puede ser para una entrevista en particular que necesitas preparar o para el proceso general de entrevistas).<br><br>",
			"<strong>Personal storytelling:</strong><br>Te ayudamos a armar, y aprender a adaptar correctamente, la historia sobre ti y tu experiencia para que sea atractiva y asertiva.<br><br>",
			"<strong>Diseño y Optimización de CV y LinkedIn:</strong><br> Te asesoramos para que tu CV y LinkedIn tengan la información precisa, de acuerdo a tu experiencia, para captar la atención de los reclutadores y/o la AI que filtra los perfiles. . ",
		],
	},
	{
		icon: Building2,
		title: "Formación y Desarrollo de Talento en las Empresas",
		description:
			"Apoyamos a las empresas con asesoría especializada y personalizada en la formación y desarrollo de sus talentos porque sabemos el profundo impacto que esto genera en la cultura organizacional y el éxito a largo plazo.",
		subtitle:
			"Nos enfocamos en brindar soluciones de aprendizaje diseñadas a la medida según las necesidades específicas de cada organización.",
		more: [
			"<strong>Workshops:</strong><br> Diseñamos talleres para abordar temas concretos de manera dinámica, fomentando el aprendizaje práctico.<br><br>",
			"<strong>Mentoría:</strong><br> Trabajo personalizado en torno a temáticas puntuales, brindando el acompañamiento necesario para mejorar competencias y resolver desafíos específicos. <br><br>",
			"<strong>Microlearning:</strong><br> Desarrollamos contenido digital de acuerdo a tus necesidades a través de módulos breves y enfocados que facilitan el aprendizaje continuo.",
		],
	},
	{
		icon: HeartHandshake,
		title: "Atracción y Retención de Talento",
		subtitle: "Atracción y Retención de Talento",
		description:
			"Sabemos que en muchas empresas no cuentan con los recursos necesarios para tener un equipo de HR interno." +
			"\n" +
			" Por eso ofrecemos apoyo para las necesidades de búsqueda de talentos y asesoría para contar con procesos y estándares adecuados en áreas claves para mejorar la experiencia de los candidatos y colaboradores.",
		more: [
			"<strong>Búsqueda de talentos:</strong> <br>Te ayudamos a buscar el talento que mejor se ajusta a tus necesidades. <br><br>",
			"<strong>¿Necesitas crear, ordenar o dar forma a los diferentes <br>procesos de HR?</strong> <br>Hoy en día es clave para la cultura de la empresa, y para la percepción que los colaboradores tienen de tu organización, contar con un proceso correctamente diseñado del viaje del colaborador.<br><br>Te ofrecemos asesoría para crear, diseñar, ordenar o re-diseñar los procesos claves para asegurar la mejor experiencia de tus colaboradores. ",
		],
	},
];

export default function Services() {
	return (
		<section className="py-20" id="services">
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-1 xl:grid-cols-3 gap-8">
					{servicesData.map((service, index) => (
						<ServiceCard key={index} index={index} {...service} />
					))}
				</div>
			</div>
		</section>
	);
}
