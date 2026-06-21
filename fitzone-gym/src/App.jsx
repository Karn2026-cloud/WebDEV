import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;