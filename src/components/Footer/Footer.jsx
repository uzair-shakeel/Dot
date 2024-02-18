import React from "react";
import "./footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="secContainer container grid"
      >
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo">
              <h1 className="flex">
                {" "}
                <SiYourtraveldottv className="icon" /> Dot
              </h1>
            </a>
          </div>
          <div className="socails flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle"> Helpful Links</span>
          <ul>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact </span>
          <span className="phone">+92 341 4376555 </span>
          <span className="email">uzairshakeel@outlook.com </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
