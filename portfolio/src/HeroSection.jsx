import "./HeroSection.css";
import myimg from "./myimg.jpeg"

export default function HeroSection(){
    return (
        <div className="herosection">
           <div className="left">
         <div className="para">
           <p> Web Developer,</p>
         </div>
         <div className="herosectionh1">
            <h1>I'm <span>Sourabh</span></h1>
         </div>
         <div className="stack">
            <h1>Frontend Developer</h1>
         </div>
         <div className="para2">
            <p>"Versatile Frontend Developer: 6 Months Experience, React, Tailwind, SQL, MongoDB, Python"</p>
         </div>
           </div>
           <div className="right">
            <img src={myimg} alt="" />
           </div>
           
        </div>
    )
}