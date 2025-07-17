import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Nav.css'

import code from '../assets/code.png';

//theme web
const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("SelectedTheme", "dark")
}
const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("SelectedTheme", "light")
}
const SelectedTheme = localStorage.getItem("SelectedTheme");
if (SelectedTheme === "dark") {
    setDarkMode();
}
const toggleTheme = (e: any) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
}


const Navbar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <>
            <div className='main-nav'>
                <div className='header-nav'>
                    <img className='logo-code-nav' src={code} width={30} alt="" />
                    <h2 className='logo-text' data-aos="fade-right"> My Portfolio</h2>
                </div>
                <div className='nav-menu'>
                    <Link to="/" className={`Link-button ${isActive('/') ? 'active' : ''}`}> Home </Link>
                    <Link to="about" className={`Link-button ${isActive('/about') ? 'active' : ''}`}> About </Link>
                    <Link to="projects" className={`Link-button ${isActive('/projects') ? 'active' : ''}`}> Projects </Link>
                    <div className='visible-to-desktop'>
                        <Link to="experience" className={`Link-button ${isActive('/experience') ? 'active' : ''}`}> Experience </Link>
                        <Link to="skill" className={`Link-button ${isActive('/skill') ? 'active' : ''}`}> Skill </Link>
                        <Link to="art" className={`Link-button ${isActive('/art') ? 'active' : ''}`}> ART </Link>
                        <Link to="contact" className={`Link-button ${isActive('/contact') ? 'active' : ''}`}> Contact </Link>
                    </div>
                    <div className="theme-toggle-wrapper visible-to-desktop">
                        <label className="toggle-switch">
                            {/* // checkbox for theme web */}
                            <input type="checkbox" id='darkmode-toggle' onChange={toggleTheme} defaultChecked={SelectedTheme === "dark"} />
                            <span className="slider">
                                <div className="clouds">
                                    <svg viewBox="0 0 100 100" className="cloud cloud1">
                                        <path
                                            d="M30,45 Q35,25 50,25 Q65,25 70,45 Q80,45 85,50 Q90,55 85,60 Q80,65 75,60 Q65,60 60,65 Q55,70 50,65 Q45,70 40,65 Q35,60 25,60 Q20,65 15,60 Q10,55 15,50 Q20,45 30,45"
                                        ></path>
                                    </svg>
                                    <svg viewBox="0 0 100 100" className="cloud cloud2">
                                        <path
                                            d="M30,45 Q35,25 50,25 Q65,25 70,45 Q80,45 85,50 Q90,55 85,60 Q80,65 75,60 Q65,60 60,65 Q55,70 50,65 Q45,70 40,65 Q35,60 25,60 Q20,65 15,60 Q10,55 15,50 Q20,45 30,45"
                                        ></path>
                                    </svg>
                                </div>
                            </span>
                        </label>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <Link to="document" className={`Link-button ${isActive('/document') ? 'active' : ''}`}> Document </Link>
                            <div className='visible-to-mobile'>
                                <Link to="experience" className={`Link-button ${isActive('/experience') ? 'active' : ''}`}> Experience </Link>
                                <Link to="skill" className={`Link-button ${isActive('/skill') ? 'active' : ''}`}> Skill </Link>
                                <Link to="art" className={`Link-button ${isActive('/art') ? 'active' : ''}`}> ART </Link>
                                <Link to="contact" className={`Link-button ${isActive('/contact') ? 'active' : ''}`}> Contact </Link>
                            </div>

                            <div className="theme-toggle-wrapper visible-to-mobile">
                                <label className="toggle-switch">
                                    <input type="checkbox" id='darkmode-toggle' onChange={toggleTheme} defaultChecked={SelectedTheme === "dark"} />
                                    <span className="slider">
                                        <div className="clouds">
                                            <svg viewBox="0 0 100 100" className="cloud cloud1">
                                                <path
                                                    d="M30,45 Q35,25 50,25 Q65,25 70,45 Q80,45 85,50 Q90,55 85,60 Q80,65 75,60 Q65,60 60,65 Q55,70 50,65 Q45,70 40,65 Q35,60 25,60 Q20,65 15,60 Q10,55 15,50 Q20,45 30,45"
                                                ></path>
                                            </svg>
                                            <svg viewBox="0 0 100 100" className="cloud cloud2">
                                                <path
                                                    d="M30,45 Q35,25 50,25 Q65,25 70,45 Q80,45 85,50 Q90,55 85,60 Q80,65 75,60 Q65,60 60,65 Q55,70 50,65 Q45,70 40,65 Q35,60 25,60 Q20,65 15,60 Q10,55 15,50 Q20,45 30,45"
                                                ></path>
                                            </svg>
                                        </div>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
