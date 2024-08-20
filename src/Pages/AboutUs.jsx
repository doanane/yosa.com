 import React, { useEffect, useState } from "react";
import "../Styles/AboutUs.css";
import Navbar from "../Components/Navbar";
import hope from "../Assets/hope.png";
import mission from '../Assets/missionicon.png';
import vision from '../Assets/visionicon.png';
import Testimonial from "../Components/Testimonial";
import Team from "../Components/Team";
import { fetchgallery } from "../api/ApiService";
import teamImage from "../Assets/teamImage.png"; 


const features = [
  {
    title: "Food & Homeless Charity",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
    ],
    icon: require('../Assets/houseicon.png'),
  },
  {
    title: "Make A Donation",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
      "Lorem Ipsum Dolor Sit Amet",
    ],
    icon: require('../Assets/dolldo.png'),
  },
  {
    title: "Non Profit NGO",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
      "Lorem Ipsum Dolor Sit Amet",
      "Children Where We Are Able To Fulfill All",
    ],
    icon: require('../Assets/shakeicon.png'),
  },
];



const AboutUs = () => {

  const [image, setImage] = useState([])

  useEffect(() => {
    fetchgallery()
    .then((response) => {
      console.log("Fetched data", response.data);
      setImage(response.data);
    }).catch((error) => {
      console.error("There was an error fetching images!", error);
    });
  }, []);




  return (
    <div className="about-page">
      <header className="header">
        <Navbar />
        <div className="header-text">
          <h1>About Us</h1>
        </div>
      </header>
  
    <div className="container">
      <div className="text-content">
        <h1>Outnovate! No Boundaries; Infinite Possibilities.</h1>
        <p>
          We are a game-changing product development house, software engineering enclave, research centre, and innovation services hub. We exist to be the enclave that communities and ecosystems will rely on to transform their everyday activities, make their lives smarter, and fulfill their dreams.
        </p>
        <p>
          Businesses are the architects of change and possess an extraordinary ability to shape communities on a global scale. With unwavering determination, businesses forge new paths that create opportunities for better livelihoods, cultivate vibrant cultures, and ignite progress that resonates far beyond their walls.
        </p>
        <p>
          Similarly, it’s in our DNA to create experiences that evolve smarter fulfillments and deliver wins for people, systems, and communities.
        </p>
      </div>
      <div className="image-content">
<img src={teamImage} alt="Team Img" />
      </div>
    </div>
       
        <Team/>
        <div className="charitySection">
      <div className="charityContent">
        <h2>Welcome To Charity</h2>
        <h1>Let Us Come Together To Make A Difference</h1>
        <p>Towards A World Where Young People Regardless Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment, Contributing To A Brighter Future For All.</p>
        <div className="missionVision">
          <div className="mission">
            <img src={mission} alt="mission" />
            <h3>Our Mission</h3>
            <p>
              To Empower Young People Of All Genders Through Inclusive Leadership. 
            </p>
          </div>
          <div className="vision">
            <img src={vision} alt="vision" />
            <h3>Our Vision</h3>
            <p>
              Working Towards A World Where Young People, Irrespective Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment. 
            </p>
          </div>
        </div>
        <div className="progressBars">
          <div className="progressBar">
            <span>Donations</span>
            <div className="bar">
              <div className="fill" style={{ width: '75%' }}></div>
            </div>
            <span>75%</span>
          </div>
          <div className="progressBar">
            <span>Medical Help</span>
            <div className="bar">
              <div className="fill" style={{ width: '90%' }}></div>
            </div>
            <span>90%</span>
          </div>
        </div>
      </div>
    </div>
        <div className="about-us-section">
          <div className="image-container">
            <img
              src={hope}
              alt="Painted rocks with hope message"
              className="main-image"
            />
            <div className="overlay">
              <ul className="overlay-text">
                <li>Together, We're Going to Make The Future</li>
                <li>Children Where We Are Able To Fulfill All</li>
                <li>
                  Their Requirements To Keep <br />
                  Them Safe From Withered World
                </li>
                <li>
                  We Have Already Stepped Out And <br />
                  Start Changing The World
                </li>
                <li>Keeping Safe Them From War, Inhumanity</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-cards">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${
                  index === 0 ? "feature-card-light" : "feature-card-light"
                }`}
              >
                <div className="icon-wrapper">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="icon"
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2>Our Gallery</h2>
          <div  className="gallery-images">
          {image.map((img, index) => (
            <img src={img.image} key={index} alt={`Gallery ${index}`} className="Gallery1" />
          ))}
          </div>
        </section>
   <Testimonial/>
    </div>
  );
};

export default AboutUs;