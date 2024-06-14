import "./Contact.css"

export default function Contact(){
    return(
        <div className="contact">
         <div className="headingcontact">
            <h1>Contact Me</h1>
         </div>
         <div className="headingh3contact">
            <h3>Please fill out he form below to discuss any work opportunities</h3>
         </div>
         <form action="https://formspree.io/f/mayrrpzy" method="POST" className="contact-inputs">
            <input name="username" placeholder="Your Name" className="input1"/>
            <br></br>
            <input name="Email" placeholder="Your email" className="input2"/>
            <textarea name="message" placeholder="Your Message" rows="5" cols="50" className="textarea"></textarea>
            <br></br>
            <input  className="submitbtn" type="Submit" value='send'/>
            {/* <button className="submitbtn">Submit</button> */}
         </form>
         <div className="About-me">
            <h1>Name: Sourabh Vashisth</h1>
            <h1>Address: Delhi/NCR</h1>
            <h1>Email: Saurabhvashisth87838@gmail.com</h1>
            <h1>Contact: 8295034350</h1>
         </div>
        </div>
    )
}