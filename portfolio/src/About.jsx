import "./About.css"
import myimg from "./myimg.jpeg"
import resume from './Resume.pdf'

export default function About(){
    return(
        <div className="about">
         <div className="img">
            <img src={myimg} alt="" className="aboutimg" />
         </div>
         <div className="aboutsection">
            <div className="headingabout">
                <h1>ABOUT</h1>
            </div>
            <div className="headingh3about">
                <h3>Proffesional Web Designer & Developer Having 6 months of Experience</h3>
            </div>
            <div className="paraabout">
                <p>
                I'm a passionate Frontend Web Developer with six months of hands-on experience in creating responsive and user-friendly web applications. My skill set includes HTML, CSS, JavaScript, React, Tailwind CSS, SQL, MongoDB, and Python, allowing me to build dynamic and robust web solutions. </p>
            </div>
            <div className="para1about">
                <p>I thrive on solving complex problems and continuously learning new technologies to stay current in the ever-evolving tech landscape. My goal is to craft seamless and engaging user experiences that drive success for businesses. I am committed to writing clean, efficient code and collaborating with cross-functional teams to deliver high-quality projects on time.</p>
            </div>
            <div className="btnabout">
                <button className="btnabout1"><a href={resume} download="Sourabh's resume">Download CV</a></button>
            </div>
         </div>
        </div>
    )
}