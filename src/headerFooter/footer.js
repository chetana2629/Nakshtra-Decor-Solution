import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/nakshtralogo.jpg";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="f-info">
        <section className="f-social-medias">
          <div className="f-logo-text">
            <Link style={{ display: "flex" }} to="/">
              <div className="f-logo">
                <img src={logo} alt="logo"></img>
              </div>
              <div className="f-text">
                <p>Nakshtra</p>
              </div>
            </Link>
          </div>
          <div className="f-about-text">
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
          </div>
          <div className="f-smedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
             
              <li>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="f-pages">
          <p>Pages</p>
          <ul>
            <li>
              <Link to={`/aboutus`}>About Us</Link>
            </li>
            <li>
              <Link to={`/projects`}>Our Projects</Link>
            </li>
           
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
          </ul>
        </section>
        <section className="f-services">
          <p>Services</p>
          <ul>
            <li>
              <Link to={`/serviceSingle`}>Kitchan</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Living Area</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bathroom</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Dinning Hall</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bedroom</Link>
            </li>
          </ul>
        </section>
        <section className="f-contact">
          <p>Contact</p>
          {/* <p>55 East Birchwood Ave. Brooklyn, New York 11201</p> */}
          <p>
            <a href="mailto: interiorsbynakshtra@gmail.com">interiorsbynakshtra@gmail.com</a>
          </p>
          <p>+918999100590</p>
        </section>
      </div>
      <div className="terms">
        <ul>
          <ol>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </ol>
          <ol>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </ol>
        
        </ul>
      </div>
      <div className="f-copyright">
        <p>Copyright © Nakshtra </p>
      </div>
    </div>
  );
}
