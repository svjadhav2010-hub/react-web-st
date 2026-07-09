import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services.jsx";
import "./App.css";
import Titles from "./components/Titles/Titles.jsx";

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
    </div>
  );
}

export default App;
