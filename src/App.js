import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services.jsx";
import Titles from "./components/Titles/Titles.jsx";
import Internships from "./components/Internships/Internships.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx"
import "./App.css";


function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Titles subtitle="Our Services" title="We Offer skill based training on technologies."/>
      <div className="container">
        <Services/>
      </div>
      <Titles subtitle="Internships" title="We Offer skill based Internship Programs on various technologies."/>
      <Internships />
      <Titles subtitle="Testimonials" title="What our user says."/>
      <div className="container">
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
