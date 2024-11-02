import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import TestimonialsCarousel from "./components/Carousel/TestimonialsCarousel";
import Footer from "./components/Footer/Footer";
import Information from "./components/Information/Information";
import Testimonials from "./components/Carousel/Testimonials";

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<Hero />
			<Information />
			<Services />
			{/* <TestimonialsCarousel /> */}
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;
