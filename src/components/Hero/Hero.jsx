import react from "react";
import './Hero.css';
import Rightarrow from '../../assets/right-arrow.png';

function Hero() {


    return (
        <div className="hero" container >
            <div className="hero-text">
                <h1>Training and development Company </h1>
                <p>
                    we provide better education for better future. Our cotinguge curriculam to desgin the students for improve skills, knowledge in dynamic feild of education
                </p>
                <button className="btn">
                    Explore More<img src={Rightarrow} alt="Right Arrow" className="right-arrow" />  
                </button>
            </div>
            
        </div>
    );
}

export default Hero;