import React from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";

// import Images =================
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";

// Here are Some postdata where use map methods .
const posts = [
  {
    id: 1,
    postImage: img11,
    title: "Beautiful Moracco, let us travel",
    desc: "The Kingdom of Morocco is a Muslim country in western North Africa, with caostlines on the Atlantic Ocean and Mediterranean Sea.",
  },
  {
    id: 2,
    postImage: img12,
    title: "Romantic moments under Eiffel Tower",
    desc: "With vast swaths of desert in its east and west and the rich Nile River valley at its heart, is site to one of the world's earliest and greatest civilizations",
  },
  {
    id: 3,
    postImage: img13,
    title: "Let us have an adventure outside Tunisia",
    desc: "Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roll the region",
  },
  {
    id: 4,
    postImage: img14,
    title: "Best Country in East Africa",
    desc: "When Kenya claimed its independence from the U.K in 1963, leaders of the newly formed republic promoted a sense of natural unity using the motto.",
  },
];

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experince in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href="#">
                    Read More <BsArrowRightShort />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
