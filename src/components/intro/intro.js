import React from "react";
import './intro.css';
import bg from '../intro/intro image.png';
import btnImg from '../intro/hire.png';
import { Link } from "react-scroll";
const Intro = () => {
    return (
         <section id="intro">
             <div className="introContent">
                 <span className="hello">Hello</span>
                 <span className="introText">I'm <span className="introName">Dagim</span> <br /> Website Designer</span>
                 <p className="introPara"> I am a skilled web Designer with creating visually appealing and user friendly Website</p>
                 <Link><button className="btn"><img src='' alt="" />Hire Me</button></Link>
            </div> 
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    );
}

export default Intro;