import React from "react";
import "./about.css";

// images==================================
import img8 from "../../assets/img8.png"
import img9 from "../../assets/img9.png"
import img10 from "../../assets/img10.png"

// import Video =======================
import video from "../../assets/video.mp4"

const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 data-aos="fade-up" data-aos-duration = "2000" className="title">Why Hikings?</h2>

        <div className="mainContent container grid">

          <div data-aos="fade-up" data-aos-duration = "2000" className="singleItem">
            <img src={img10} alt="Mountains" />

            <h3>100+ Mountains</h3>
            <p>
              Research shows that a choice to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration = "2500" className="singleItem">
            <img src={img8} alt="Hikings" />

            <h3>1000+ Hikings</h3>
            <p>
              Research shows that a choice to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration = "3000" className="singleItem">
            <img src={img9} alt="Customers" />

            <h3>2000+ Customers</h3>
            <p>
              Research shows that a choice to break away from the normal rhythms
              of daily life reduces stress and improves health and well-being.
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful House experience nin there! </h2>
              <p>The Adventure subranking is based on an equally weighted average of scores from five country.</p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted typeof="video/mp4"></video>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
