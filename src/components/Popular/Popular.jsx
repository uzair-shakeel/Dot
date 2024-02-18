import React from "react";
import "./popular.css";
import { BsArrowRightShort, BsDot } from "react-icons/bs";

// import the images
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";
import image4 from "../../assets/img4.jpg";

const Data = [
  {
    id: 1,
    image: image1,
    destTitle: "Machu-Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    image: image2,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    image: image3,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    image: image4,
    destTitle: "Shah Faisal Mosque",
    location: "Pakistan",
    grade: "CULTURAL RELAX",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <h2 data-aos="fade-up" data-aos-duration = "2000" className="secTitle">Popular Destination</h2>
          <p data-aos="fade-up" data-aos-duration = "2500">
            From historical cities to natural specteculars, come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {Data.map(({id, image, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" data-aos-duration = "3000" className="singleDestination">
                <div className="destImage">
                  <img src={image} alt="Image Title" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <BsDot className="icon" />
                      <span className="dot">Dot</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
