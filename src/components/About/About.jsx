import React from 'react';
import './About.css';
import about_img from '../../assets/aboutus.png';
import play_img from '../../assets/play.png';

function About()
{
    return (
        <div className='about'>
            <div className='about-left'>
                    <img src={about_img} alt="" className='about-img'/>

                    <img src={play_img} alt="" className='play-icon'/>
                </div>
                <div className='about-right'> 
                    <h3>About Seema Technologies</h3>
                    <h2>Nurturing Tommorrow's Engineers Today </h2>
                    <p>Embark on Transformative technical journey with our Company's comprehensive training programs. Our cutting-edge curriculum is desined to empower trainesswith knowlwdge, skills and experiences needed to excel in the field of training</p>
                    <p>With focus on innovation, hands on learning and personalized mentorship, our programs prepare aspiring traineees to make meaningful impact in their IT carrier and communities. </p>
                     <p>Whether you aspire to become IT Professional, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of learninge</p>
                </div>
            </div>
    );
}
export default About;