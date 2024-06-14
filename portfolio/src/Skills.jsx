import "./Skills.css"
// import react1 from "./react1.png"
// import html from "./html.png"
// import tailwind from "./tailwind.png"
import html from './Skills/HTML.png'
import css from './Skills/CSS.png'
import js from './Skills/Javascript.png'
import react from './Skills/React.png'
import tailwind from './Skills/Tailwind.png'
import sql from './Skills/SQL.png'
import mongo from './Skills/Mongodb.png'
import python from './Skills/Python.png'


export default function Skills(){
    return(
        <div className="skills">
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                <div className="react">
                    <div className="reactimg">
                        <img src={html} alt="" className="limg" />
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={css} alt="" className="limg"/>
                    </div>
                </div>
                <div className="tailwind">
                    <div className="tailwindimg">
                        <img src={js} alt="" className="limg" />
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={react} alt="" className="limg"/>
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={tailwind} alt="" className="limg"/>
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={sql} alt="" className="limg"/>
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={mongo} alt="" className="limg"/>
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={python} alt="" className="limg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}