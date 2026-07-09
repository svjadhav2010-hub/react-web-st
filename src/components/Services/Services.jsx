import React from "react";
import "./Services.css";
import C from "../../assets/C.png";
import ICON from "../../assets/icon-2.png";
import CPP from "../../assets/CPP.png";
import JAVA from "../../assets/java.png";
import PYTHON from "../../assets/python.png";
import ML  from "../../assets/ML.png";
import DS from "../../assets/DataScience.png";
import PHP from "../../assets/php.png";
import ANDROID from "../../assets/Android.png";
import JAVASCRIPT from "../../assets/JavaScript.png";

function Services() {
    return (
        <div className="services">
            <div className="course">
                <img src={C} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>C Programming</p>
                </div>
            </div>
            <div className="course">
                <img src={CPP} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>C++ Programming</p>
                </div>
            </div>
            <div className="course">
                <img src={JAVA} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>Java Programming</p>
                </div>
            </div>
            <div className="course">
                <img src={PYTHON} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>Python Programming</p>
                </div>
            </div>
            <div className="course">
                <img src={ML} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>Machine Learning</p>
                </div>
            </div>
            <div className="course">
                <img src={DS} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>Data Science</p>
                </div>
            </div>
            <div className="course">
                <img src={PHP} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>PHP Programming</p>
                </div>
            </div>
            <div className="course">
                <img src={ANDROID} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>Android Development</p>
                </div>
            </div>
            <div className="course">
                <img src={JAVASCRIPT} alt="" />
                <div className="caption">
                    <img src={ICON} alt="" />
                    <p>JavaScript Programming</p>
                </div>
            </div>
        </div>
    );
}

export default Services;