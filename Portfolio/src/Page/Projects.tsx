import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Project.css';
import GitPic from '../assets/icon/githubICON.png';
import facebook from '../assets/icon/facebookICON.png';
import { Carousel } from 'antd';
import shopping from '../assets/Project/shop/shoppingmall.png';
import s1 from '../assets/Project/shop/S1.jpg';
import s2 from '../assets/Project/shop/S2.jpg';
import s3 from '../assets/Project/shop/S3.jpg';
import s4 from '../assets/Project/shop/S4.jpg';
import s5 from '../assets/Project/shop/S5.jpg';
import s6 from '../assets/Project/shop/S6.jpg';
import s7 from '../assets/Project/shop/S7.jpg';
import s8 from '../assets/Project/shop/S8.jpg';
import s9 from '../assets/Project/shop/S9.jpg';

import n1 from '../assets/Project/netflim/n1.png';
import n2 from '../assets/Project/netflim/n2.png';
import n3 from '../assets/Project/netflim/n3.png';
import n4 from '../assets/Project/netflim/n4.png';
import n5 from '../assets/Project/netflim/n5.png';
import n6 from '../assets/Project/netflim/n6.png';
import n7 from '../assets/Project/netflim/n7.png';
import n8 from '../assets/Project/netflim/n8.png';

import c1 from '../assets/Project/CTF/c1.png';
import c2 from '../assets/Project/CTF/c2.png';
import c3 from '../assets/Project/CTF/c3.png';
import c4 from '../assets/Project/CTF/c4.png';
import c5 from '../assets/Project/CTF/c5.png';

import h1 from '../assets/Project/HoneyPot/h1.png';
import h2 from '../assets/Project/HoneyPot/h2.png';
import h3 from '../assets/Project/HoneyPot/h3.png';
import h4 from '../assets/Project/HoneyPot/h4.png';
import h5 from '../assets/Project/HoneyPot/h5.png';
import h6 from '../assets/Project/HoneyPot/h6.png';

// https://chatgpt.com/share/6873eb57-b31c-8008-9864-d0c7a038010a คำอธิบายโปรเจกต์เวอร์ชันภาษาไทย
const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <h1 className="Project-title" data-aos="fade-down">Projects</h1>
      <div className="Project">
        <div className="Project-container" data-aos="fade-up">

          <div className='side-project'>
            <Carousel autoplay arrows>
              <img src={h1} alt="Picture Project" className='Project-picture' />
              <img src={h2} alt="Picture Project" className='Project-picture' />
              <img src={h3} alt="Picture Project" className='Project-picture' />
              <img src={h4} alt="Picture Project" className='Project-picture' />
              <img src={h5} alt="Picture Project" className='Project-picture' />
              <img src={h6} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Smart tiny HoneyPot</h2>
            <p className='Project-text-content'>
              Smart Tiny Honeypot Project <br />(Undergraduate Capstone Project)<br /><br />
              This was my university capstone project, developed in a team of 4 members. The aim was to build an intelligent, lightweight honeypot system capable of logging malicious network activities and providing real-time access through a secured remote connection.<br /><br />
              A Honeypot is a decoy system used to lure and monitor attackers in a controlled environment. Our project integrated two major tools: Cowrie (an SSH/Telnet honeypot) and OpenCanary (a lightweight multiprotocol honeypot).<br /><br />
              My Responsibilities<br />
              - Deployed and tested both Cowrie and OpenCanary on separate virtual machines<br />
              - Developed a Python script to parse and transform honeypot logs into a structured format and store them in an SQLite database<br />
              - Built the backend controller using Node.js, Express, and Prisma to expose RESTful APIs connected to the database<br />
              - Created a secure Dashboard interface with proper access control and user authorization<br /><br />
              - Separated the system architecture:<br />
              --- Backend hosted on a Raspberry Pi<br />
              --- Frontend deployed on a dedicated server<br /><br />
              - Integrated ZeroTier VPN to enable secure, remote access to logs from any location within the virtual LAN, ensuring seamless LAN-like access without physical proximity<br />
              - Added an AI-powered chatbot on the dashboard using Ollama (LLM) to answer user queries related to threat data and honeypot logs<br /><br />
              Technologies Used: <br />
              - SQLite, JavaScript, Node.js, Express, Prisma, Python, Raspberry Pi, React, TypeScript, ZeroTier, Ollama (LLM)<br />
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/dashboard-honeypot" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>

          <div className='side-project'>
            <Carousel autoplay arrows>
              <img src={s1} alt="Picture Project" className='Project-picture' />
              <img src={s3} alt="Picture Project" className='Project-picture' />
              <img src={shopping} alt="Picture Project" className='Project-picture' />
              <img src={s2} alt="Picture Project" className='Project-picture' />
              <img src={s4} alt="Picture Project" className='Project-picture' />
              <img src={s5} alt="Picture Project" className='Project-picture' />
              <img src={s6} alt="Picture Project" className='Project-picture' />
              <img src={s7} alt="Picture Project" className='Project-picture' />
              <img src={s8} alt="Picture Project" className='Project-picture' />
              <img src={s9} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Shopping Mall</h2>
            <p className='Project-text-content'>
              Shopping Mall Project <br />(Software Engineering Course)<br />

              <br />This group project was developed for the Software Engineering course. Our team consisted of 5 members, and we collaborated to gather requirements from stakeholders and divide the system into smaller functional modules. I was responsible for two key <br />
              <br />modules:<br />
              - Store Area Booking System<br />
              - Payment System for Mall Tenants<br /><br />
              My responsibilities in the project included:<br />
              - Designing the database schema and setting up the backend and frontend structure for the team<br />
              - Creating the UI and system theme using Figma<br />
              - Developing core pages such as the admin dashboard, job application portal, event management, advertising management, and user profile pages<br /><br />
              Store Area Booking Module:<br />
              - Allows tenants to reserve a shop area, customize shop appearance, and receive customer reviews<br />
              - Tenants can freely create, edit, or delete their shop-related information<br /><br />
              Payment Module:<br />
              - Includes an approval process from the admin<br />
              - Notifies users about payment statuses<br />
              - Supports multiple payment methods, membership registration, and utility services (e.g., water, electricity)<br />
              - Automatically sends payment status updates to users via Gmail notifications<br /><br />
              Team Workflow:<br />
              - Weekly Scrum meetings with progress updates recorded in a private Facebook group<br />
              - Task tracking and issue management handled through GitHub Issues and To-Do lists<br /><br />
              Technologies used:<br />
              - React, TypeScript, Golang, Ant Design, SQLite, Figma, Draw.io, GitHub
            </p>
            <div className='Project-button'>
              <a href="https://github.com/sut67/team13" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
              <a href="https://www.facebook.com/profile.php?id=61567251587676" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="GitHub" width={25} />Facebook</a>
            </div>
          </div>


          <div className='side-project'>
            <Carousel autoplay arrows>
              <img src={n1} alt="Picture Project" className='Project-picture' />
              <img src={n2} alt="Picture Project" className='Project-picture' />
              <img src={n3} alt="Picture Project" className='Project-picture' />
              <img src={n4} alt="Picture Project" className='Project-picture' />
              <img src={n5} alt="Picture Project" className='Project-picture' />
              <img src={n6} alt="Picture Project" className='Project-picture' />
              <img src={n7} alt="Picture Project" className='Project-picture' />
              <img src={n8} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Netflim</h2>
            <p className='Project-text-content'>
              Netflim Project<br />(System Analysis and Design Course)<br /><br />
              This was a team project for the System Analysis and Design course, developed by a group of 5 members. We collaborated to gather client requirements and translate them into a fully functional web-based movie streaming platform.<br />
              Each member was responsible for a specific subsystem, but I went beyond my assigned role to help complete key components and ensure the overall quality and usability of the platform.<br /><br />
              My Roles and Responsibilities<br />
              - Developed the Watch History Module, which tracks users' viewing activity and allows them to revisit previously watched content<br />
              - Includes a privacy feature: Incognito Mode, where watch history is not recorded<br /><br />
              - Designed the entire User Interface (UI) using Figma<br />
              - Designed the Database Schema and entity relationships using Draw.io<br />
              - Built backend controllers and integrated the data layer<br /><br />
              Developed key pages of the application, including:<br />
              -- Home Page<br />
              -- All Movies Page<br />
              -- Login System<br />
              -- Role-Based Access Control for user permissions<br /><br />
              Technologies Used<br />
              - React, TypeScript, Golang, Figma, Draw.io<br />
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/testWebForSA" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>

          <div className='side-project'>
            <Carousel autoplay arrows>
              <img src={c1} alt="Picture Project" className='Project-picture' />
              <img src={c2} alt="Picture Project" className='Project-picture' />
              <img src={c3} alt="Picture Project" className='Project-picture' />
              <img src={c4} alt="Picture Project" className='Project-picture' />
              <img src={c5} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>CTF Cybersecurity Game</h2>
            <p className='Project-text-content'>
              CTF Cybersecurity Game<br />(Cybersecurity Fundamentals Course Project)<br /><br />
              This was a group project for the Cybersecurity Fundamentals course, where we developed a web-based Capture The Flag (CTF) game that applied cybersecurity concepts learned throughout the semester, including:<br /><br />
              - Data encryption and decryption<br />
              - Use of Symmetric and Asymmetric cryptography<br />
              - Logical puzzle-solving with real-world security principles<br /><br />
              The team consisted of 3 members and the game featured 7 challenges. I was responsible for designing and implementing Levels 5, 6, and 7, which required more complex cryptographic thinking and puzzle creation.<br /><br />
              Roles and Responsibilities<br />
              - Built a web-based CTF game applying cybersecurity knowledge<br />
              - Designed and implemented Levels 5–7, incorporating encryption challenges and logic-based tasks<br />
              - Developed the frontend using React and TypeScript<br />
              - Built the backend using Golang<br />
              - Stored challenge data, answers, and player progress using SQLite<br /><br />
              Technologies Used<br />
              - React, TypeScript, Golang, SQLite<br />
            </p>
            <div className='Project-button'>
              <a href="https://github.com/wanchaick19/CTF-2567" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Projects
