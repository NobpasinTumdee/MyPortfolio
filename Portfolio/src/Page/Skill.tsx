import react_logo from "../assets/icon/react.png";
import html from "../assets/icon/html.png";
import css from "../assets/icon/css-3.png";
import js from "../assets/icon/js.png";
import typescript from "../assets/icon/typescript.png";
import bootstrap from "../assets/icon/bootstrap.png";

import Nodejs from "../assets/icon/Nodejs.png";
import Express from "../assets/icon/Express.png";
import Go_Logo from "../assets/icon/Go_Logo.png";
import prism from "../assets/icon/prism.png";
import mysql from "../assets/icon/mysql.png";
import SQLite from "../assets/icon/SQLite.jpg";
import Postgresql from "../assets/icon/PostgresqlB.png";

import python from "../assets/icon/python.png";
import C_CH from "../assets/icon/C_CH.png";
import C_Programming from "../assets/icon/C_Programming.png";
import Java from "../assets/icon/Java.png";
// import  from "../assets/icon/";
import '../Style/Skill.css';

import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
  useEffect(() => {
      Aos.init({
        duration: 500,
        once: true,
      });
    }, []);
  return (
    <>
      <h1 style={{ textAlign: 'center' }} data-aos="fade-down">MY SKILLS</h1>
      <p style={{ textAlign: 'center', opacity: '0.7' }} data-aos="fade-up">The skills you see are just a few of the things I learned and gained from studying and gaining more knowledge.</p>

      <h2 style={{ textAlign: 'center', marginBottom: '0' }}>Front-end</h2>
      <div className="skill-frontend">
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={react_logo} alt="react_logo" />
          <h3>React</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={html} alt="logo" />
          <h3>HTML</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={css} alt="logo" />
          <h3>CSS</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={js} alt="logo" />
          <h3>JavaScript</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={typescript} alt="logo" />
          <h3>Typescript</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={bootstrap} alt="logo" />
          <h3>Bootstrap</h3>
        </div>
      </div>


      <h2 style={{ textAlign: 'center', marginBottom: '0' }}>Back-end</h2>
      <div className="skill-frontend">
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={Nodejs} alt="react_logo" />
          <h3>Nodejs</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={Express} alt="logo" />
          <h3>Express</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={Go_Logo} alt="logo" />
          <h3>Go</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={prism} alt="logo" />
          <h3>prisma</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={mysql} alt="logo" />
          <h3>mysql</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={SQLite} alt="logo" />
          <h3>SQLite</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={Postgresql} alt="logo" />
          <h3>Postgresql</h3>
        </div>
      </div>


      <h2 style={{ textAlign: 'center', marginBottom: '0' }}>LANGUAGES</h2>
      <div className="skill-frontend">
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={python} alt="react_logo" />
          <h3>Python</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={C_CH} alt="logo" />
          <h3>C#</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={C_Programming} alt="logo" />
          <h3>C</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <img className="Logo-img" src={Java} alt="logo" />
          <h3>Java</h3>
        </div>
      </div>


      <h2 style={{ textAlign: 'center', marginBottom: '0' }}>OTHER</h2>
      <div className="skill-frontend">
        <div className="Logo-img-group" data-aos="flip-left">
          <h3>GitHub</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <h3>Postman</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <h3>Figma</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <h3>draw.io</h3>
        </div>
        <div className="Logo-img-group" data-aos="flip-left">
          <h3>premiere pro</h3>
        </div>
      </div>
    </>
  )
}

export default Skill
