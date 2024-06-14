import "./Projects.css"
import portfolio from "./portfolio.jpeg"
import imdb from "./IMDB.jpeg"
import news from "./News.jpeg"


export default function Projects(){
    return (
        <div className="projects">
           <div className="headingprojects">
            <h1>My Projects</h1>
            <div className="projects1">
                <div className="box1">
                    <div className="headingportfolio">
                        <h4>Portfolio</h4>
                    </div>
                    <img src={portfolio} alt=""  className="portfolioimg"/>
                </div>
                <div className="box1">
                    <div className="headingspotify">
                        <h4>IMDB clone</h4>
                    </div>
                    <img src={imdb} alt="" className="spotifyimg"/>
                </div>
                <div className="box1">
                    <div className="headingecommerce">
                        <h4>News Website</h4>
                    </div>
                    <img src={news} alt="" className="ecommerceimg"/>
                    {/* <div className="project-link">
                        <a href="">Code</a>
                        <a href="">live</a>
                    </div> */}
                </div>
            </div>
           </div>
        </div>
    )
}