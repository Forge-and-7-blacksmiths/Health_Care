import React from "react";
import './Landing.scss';
import Heart from '../../images/heart.svg';
import Pic from '../../images/formsvgone.svg';
import Mic from '../../images/formsvgtwo.svg';
import Poisk from '../../images/formsvgthree.svg';
import HeroImage from '../../images/hero-image.jpg';

export const Landing = () => {
  return (
    <section className="hero container">
      <div className=" hero__flex">
        <div className="hero__link">
          <a href="" className="link">
            <h3 className="hero__link__text">Health Matters</h3>
            <img src={Heart} alt="heart" />
          </a>
        </div>
        <h2 className="hero__headline"><span className="hero__headline_text_blue"> One Step Solution </span> <br /> for all your <br /> dietary needs.</h2>
        <h3 className="hero__text">Using your BMI index we calculate whether the <br /> dish is suitable for you.</h3>
        <form action="" className="hero__form">
        <input type="search" className="hero__search__input" placeholder="Search your product"/>
        
          <button className="hero__button__one">
          <img src={Pic} alt="pic" />
          </button>
          <button className="hero__button__two">
          <img src={Mic} alt="mic" />
          </button>
          <button className="hero__button__three">
          <img src={Poisk} alt="poisk" />
          </button>
        </form>
        
      </div>  
      <div>
      <img src={HeroImage} alt="pic" />
      </div>
    </section>
    
  );
};