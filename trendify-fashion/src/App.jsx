import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Collection from "./components/Collection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Collection />
      <Testimonials />
      <Newsletter />
      <FloatingCart />
      <Footer />
    </>
  );
}

export default App;