import {React,useRef} from 'react';
import './Testimonial.css';
import back_icon from '../../assets/left_arrow.png';
import next_icon from '../../assets/right_arrow.png';
import cst1 from '../../assets/icon.png';
import cst2 from '../../assets/icon.png';
import cst3 from '../../assets/icon.png';
import cst4 from '../../assets/icon.png';
import cst5 from '../../assets/icon.png';
import cst6 from '../../assets/icon.png';
import cst7 from '../../assets/icon.png';
import cst8 from '../../assets/icon.png';

function Testimonial()
{
    const sld=useRef(null);
    let x=0;

    const backward=()=>
    {
        if(x<0)
        {
            x+=25;
            sld.current.style.transform=`translateX(${x}%)`;
        }
        
    }
    
    const forward=()=>
    {
        if(x>-50)
        {
            x-=25;
            sld.current.style.transform=`translateX(${x}%)`;
        }
    }
    
    return (
        <div className='testimonial'>
            <img src={back_icon} alt="" className='back-btn' onClick={backward} />
            <img src={next_icon} alt="" className='next-btn' onClick={forward} />
            <div className='slider'>
                <ul ref={sld}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst1} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst1} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst2} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst3} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst4} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst5} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst6} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst7} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={cst8} alt='' />
                                <div>
                                    <h3>Swayam Jadhav</h3>
                                    <span>KKWIEER, Nashik</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my training at Seema Technologies was one of the best decision I have ever made. Supportive communities and state of the art and commitment IT excellence have truely excel my expectations </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonial;