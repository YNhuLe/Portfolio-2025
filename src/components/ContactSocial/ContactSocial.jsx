import { div } from "three/src/nodes/math/OperatorNode.js";
import "./ContactSocial.scss";
import { Linkedin, Github, Mail } from "lucide-react";
import { href } from "react-router-dom";
function ContactSocial(){


    const socialLinks = [
        {
            name: "LinkedIn",
            url: "linkedin.com/in/jennynhuyle",
            href: "https://www.linkedin.com/in/jennynhuyle/",
            icon: <Linkedin/>
        },
        {
            name: "GitHub",
            url: "github.com/YNhuLe",
            href:"https://github.com/YNhuLe",
            icon: <Github/>
        },
        {
            name: "Email",
            url: "jennyle.tech@gmail.com",
            href:"mailto:jennyle.tech@gmail.com",
            icon: <Mail/>

        }
    ]
    return (


    <div className="contact__social">
        {socialLinks.map((link) => (
             <div className="contact__social-container" key={link.name}>
            <a href={link.href}  className="contact__social-link" target="_blank" rel="noopener noreferrer">
               
               <div className="contact__social-icon"> {link.icon}</div>
               <div className="contact__social-text">
                <span className="contact__social-textname">{link.name}</span>
                <span className="contact__social-texturl">{link.url}</span></div>
         </a>  </div> 
        ))}
    </div>


    )
};

export default ContactSocial;