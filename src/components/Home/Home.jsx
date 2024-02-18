import React, { useEffect } from "react";
import "./home.css";


const Home = () => {

  return (
    <div className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Plan Your Trip With Travel Dot
          </h1>
          <p data-aos="fade-up" data-aos-duration = "2500" className="subTitle">
            Travel to your favourite city with respectful of the environment!
          </p>
          <button data-aos="fade-up" data-aos-duration = "3000" className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>
        <div className="homeCard grid">
          <div data-aos="fade-right" data-aos-duration = "2000" className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          <div data-aos="fade-right" data-aos-duration = "2500" className="distDiv">
            <label htmlFor="Distance">Distance</label>
            <input type="text" placeholder="11/Meters" />
          </div>
          <div data-aos="fade-right" data-aos-duration = "3000" className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="$140-$500" />
          </div>
          <button data-aos="fade-left" data-aos-duration = "2000" className="btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
