import React from "react";
import {
  MdAirportShuttle,
  MdKingBed,
  MdBathtub,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import "./offers.css";

// import some Images
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

// Data of Offers

const offers = [
  {
    id: 1,
    image: img5,
    destTitle: "Machu Picchu",
    location: "Peru",
    price: "$7,520",
  },
  {
    id: 2,
    image: img6,
    destTitle: "Machu Picchu",
    location: "Mexico",
    price: "$2,52",
  },
  {
    id: 3,
    image: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    price: "$4,400",
  },
];

const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration = "2000" className="secTitle">Special Offers</h2>
          <p data-aos="fade-up" data-aos-duration = "2500">
            From historical cities to natural specteculars, come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {offers.map(({ image, destTitle, price, location }) => {
            return (
              <div data-aos="fade-up" data-aos-duration = "3000" className="singleOffer">
                <div className="destImage">
                  <img src={image} alt={destTitle} />

                  <span className="discount">30% 0ff</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>

                  <div className="amenities flex">
                    <div className="singleAmenities flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenities flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdAirportShuttle className="icon" />
                      <small>SHuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310, {location}</small>
                  </div>

                  <button className="btn flex">
                    View Details <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
