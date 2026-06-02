import Benefits from "./components/Benifits";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SuitableFor from "./components/Suitable";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Features/>
      <Benefits />
      <SuitableFor/>
      <WhyChooseUs/>
      <Contact />
    </div>
  );
}