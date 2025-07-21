import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Project.css';
import GitPic from '../assets/icon/githubICON.png';
import facebook from '../assets/icon/facebookICON.png';
import { Carousel, Image, Modal } from 'antd';
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
import EDR_S from '../assets/Project/shop/EDR.png';

import n1 from '../assets/Project/netflim/n1.png';
import n2 from '../assets/Project/netflim/n2.png';
import n3 from '../assets/Project/netflim/n3.png';
import n4 from '../assets/Project/netflim/n4.png';
import n5 from '../assets/Project/netflim/n5.png';
import n6 from '../assets/Project/netflim/n6.png';
import n7 from '../assets/Project/netflim/n7.png';
import n8 from '../assets/Project/netflim/n8.png';
import EDR_N from '../assets/Project/netflim/EDR_N.png';

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

import g1 from '../assets/Project/GorillaType/g1.png';
import g2 from '../assets/Project/GorillaType/g2.png';

import sh1 from '../assets/Project/LifeDaily/sh1.png';
import sh2 from '../assets/Project/LifeDaily/sh2.png';
import sh3 from '../assets/Project/LifeDaily/sh3.png';
import sh4 from '../assets/Project/LifeDaily/sh4.png';
import sh5 from '../assets/Project/LifeDaily/sh5.png';
import sh6 from '../assets/Project/LifeDaily/sh6.png';

import ne1 from '../assets/Project/nextjs/ne1.png';
import ne2 from '../assets/Project/nextjs/ne2.png';

import F1 from '../assets/Project/FlashLoop/F1.png';
import F2 from '../assets/Project/FlashLoop/F2.png';
import F3 from '../assets/Project/FlashLoop/F3.png';
import F4 from '../assets/Project/FlashLoop/F4.png';

// https://chatgpt.com/share/6873eb57-b31c-8008-9864-d0c7a038010a คำอธิบายโปรเจกต์เวอร์ชันภาษาไทย
const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Modal Honeypot
  const [isModalOpenHoneypot, setIsModalOpenHoney] = useState(false);
  const showModal = () => { setIsModalOpenHoney(true); };
  const handleOk = () => { setIsModalOpenHoney(false); setIsModalOpenMall(false); setIsModalOpenNetflim(false); setIsModalOpenCTF(false); setIsModalOpenGorillaType(false); setIsModalOpenLifeDaily(false); setIsModalOpenNext(false); setIsFlash(false); };
  const handleCancel = () => { setIsModalOpenHoney(false); setIsModalOpenMall(false); setIsModalOpenNetflim(false); setIsModalOpenCTF(false); setIsModalOpenGorillaType(false); setIsModalOpenLifeDaily(false); setIsModalOpenNext(false); setIsFlash(false); };

  // Modal Shopping Mall
  const [isModalOpenMall, setIsModalOpenMall] = useState(false);
  const showModalMall = () => { setIsModalOpenMall(true); };

  // Modal Netflim
  const [isModalOpenNetflim, setIsModalOpenNetflim] = useState(false);
  const showModalNetflim = () => { setIsModalOpenNetflim(true); };

  // Modal CTF Cybersecurity Game
  const [isModalOpenCTF, setIsModalOpenCTF] = useState(false);
  const showModalCTF = () => { setIsModalOpenCTF(true); };

  // GorillaType
  const [isModalOpenGorillaType, setIsModalOpenGorillaType] = useState(false);
  const showModalGorillaType = () => { setIsModalOpenGorillaType(true); };

  // LifeDaily
  const [isModalOpenLifeDaily, setIsModalOpenLifeDaily] = useState(false);
  const showModalLifeDaily = () => { setIsModalOpenLifeDaily(true); };

  // Nextjs
  const [isModalOpenNext, setIsModalOpenNext] = useState(false);
  const showModalNext = () => { setIsModalOpenNext(true); };

  // Nextjs
  const [isModalFlash, setIsFlash] = useState(false);
  const showFlash = () => { setIsFlash(true); };

  return (
    <>
      {/* HoneyPot */}
      <Modal
        title="Smart tiny HoneyPot"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenHoneypot}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          <b>Smart Tiny Honeypot Project</b> <br />(Undergraduate Capstone Project)<br /><br />
          This was my university capstone project, developed in a team of 4 members. The aim was to build an intelligent, lightweight honeypot system capable of logging malicious network activities and providing real-time access through a secured remote connection.<br /><br />
          A Honeypot is a decoy system used to lure and monitor attackers in a controlled environment. Our project integrated two major tools: Cowrie (an SSH/Telnet honeypot) and OpenCanary (a lightweight multiprotocol honeypot).<br /><br />
          <b>My Responsibilities</b><br />
          - Deployed and tested both Cowrie and OpenCanary on separate virtual machines<br />
          - Developed a Python script to parse and transform honeypot logs into a structured format and store them in an SQLite database<br />
          - Built the backend controller using Node.js, Express, and Prisma to expose RESTful APIs connected to the database<br />
          - Created a secure Dashboard interface with proper access control and user authorization<br /><br />
          - <b>Separated the system architecture:</b><br />
          --- Backend hosted on a Raspberry Pi<br />
          --- Frontend deployed on a dedicated server<br /><br />
          - Integrated ZeroTier VPN to enable secure, remote access to logs from any location within the virtual LAN, ensuring seamless LAN-like access without physical proximity<br />
          - Added an AI-powered chatbot on the dashboard using Ollama (LLM) to answer user queries related to threat data and honeypot logs<br /><br />
          <b>Technologies Used:</b> <br />
          - SQLite, JavaScript, Node.js, Express, Prisma, Python, Raspberry Pi, React, TypeScript, ZeroTier, Ollama (LLM)<br />
        </p>
      </Modal>
      <h1 className="Project-title" data-aos="fade-down">Projects</h1>
      <div className="Project">
        <div className="Project-container" data-aos="fade-up">

          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={h1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h4} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h5} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h6} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Smart tiny HoneyPot</h2>
            <p className='Project-text-content' onClick={showModal}>
              <b>Smart Tiny Honeypot Project</b> <br />(Undergraduate Capstone Project)<br /><br />
              This was my university capstone project, developed in a team of 4 members. The aim was to build an intelligent, lightweight honeypot system capable of logging malicious network activities and providing real-time access through a secured remote connection.<br /><br />
              A Honeypot is a decoy system used to lure and monitor attackers in a controlled environment. Our project integrated two major tools: Cowrie (an SSH/Telnet honeypot) and OpenCanary (a lightweight multiprotocol honeypot).<br /><br />
              <b>My Responsibilities</b><br />
              - Deployed and tested both Cowrie and OpenCanary on separate virtual machines<br />
              - Developed a Python script to parse and transform honeypot logs into a structured format and store them in an SQLite database<br />
              - Built the backend controller using Node.js, Express, and Prisma to expose RESTful APIs connected to the database<br />
              - Created a secure Dashboard interface with proper access control and user authorization<br /><br />
              - <b>Separated the system architecture:</b><br />
              --- Backend hosted on a Raspberry Pi<br />
              --- Frontend deployed on a dedicated server<br /><br />
              - Integrated ZeroTier VPN to enable secure, remote access to logs from any location within the virtual LAN, ensuring seamless LAN-like access without physical proximity<br />
              - Added an AI-powered chatbot on the dashboard using Ollama (LLM) to answer user queries related to threat data and honeypot logs<br /><br />
              <b>Technologies Used:</b> <br />
              - SQLite, JavaScript, Node.js, Express, Prisma, Python, Raspberry Pi, React, TypeScript, ZeroTier, Ollama (LLM)<br />
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/dashboard-honeypot" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>


          {/* Shopping Mall Project */}
          <Modal
            title="Shopping Mall Project"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpenMall}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>Shopping Mall Project</b> <br />(Software Engineering Course)<br />
              <br />This group project was developed for the Software Engineering course. Our team consisted of 5 members, and we collaborated to gather requirements from stakeholders and divide the system into smaller functional modules. I was responsible for two key <br />
              <br /><b>modules:</b><br />
              - Store Area Booking System<br />
              - Payment System for Mall Tenants<br /><br />
              <b>My responsibilities in the project included:</b><br />
              - Designing the database schema and setting up the backend and frontend structure for the team<br />
              - Creating the UI and system theme using Figma<br />
              - Developing core pages such as the admin dashboard, job application portal, event management, advertising management, and user profile pages<br /><br />
              <Image src={EDR_S} alt="" style={{ width: '100%' }} /><br /><br />
              <b>Store Area Booking Module:</b><br />
              - Allows tenants to reserve a shop area, customize shop appearance, and receive customer reviews<br />
              - Tenants can freely create, edit, or delete their shop-related information<br /><br />
              <b>Payment Module:</b><br />
              - Includes an approval process from the admin<br />
              - Notifies users about payment statuses<br />
              - Supports multiple payment methods, membership registration, and utility services (e.g., water, electricity)<br />
              - Automatically sends payment status updates to users via Gmail notifications<br /><br />
              <b>Team Workflow:</b><br />
              - Weekly Scrum meetings with progress updates recorded in a private Facebook group<br />
              - Task tracking and issue management handled through GitHub Issues and To-Do lists<br /><br />
              <b>Technologies used:</b><br />
              - React, TypeScript, Golang, Ant Design, SQLite, Figma, Draw.io, GitHub
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={s1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={shopping} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s4} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s5} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s6} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s7} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s8} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={s9} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Shopping Mall</h2>
            <p className='Project-text-content' onClick={showModalMall}>
              <b>Shopping Mall Project</b> <br />(Software Engineering Course)<br />
              <br />This group project was developed for the Software Engineering course. Our team consisted of 5 members, and we collaborated to gather requirements from stakeholders and divide the system into smaller functional modules. I was responsible for two key <br />
              <br />modules:<br />
              - Store Area Booking System<br />
              - Payment System for Mall Tenants<br /><br />
              <b>My responsibilities in the project included:</b><br />
              - Designing the database schema and setting up the backend and frontend structure for the team<br />
              - Creating the UI and system theme using Figma<br />
              - Developing core pages such as the admin dashboard, job application portal, event management, advertising management, and user profile pages<br /><br />
              <b>Store Area Booking Module:</b><br />
              - Allows tenants to reserve a shop area, customize shop appearance, and receive customer reviews<br />
              - Tenants can freely create, edit, or delete their shop-related information<br /><br />
              <b>Payment Module:</b><br />
              - Includes an approval process from the admin<br />
              - Notifies users about payment statuses<br />
              - Supports multiple payment methods, membership registration, and utility services (e.g., water, electricity)<br />
              - Automatically sends payment status updates to users via Gmail notifications<br /><br />
              <b>Team Workflow:</b><br />
              - Weekly Scrum meetings with progress updates recorded in a private Facebook group<br />
              - Task tracking and issue management handled through GitHub Issues and To-Do lists<br /><br />
              <b>Technologies used:</b><br />
              - React, TypeScript, Golang, Ant Design, SQLite, Figma, Draw.io, GitHub
            </p>
            <div className='Project-button'>
              <a href="https://github.com/sut67/team13" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
              <a href="https://www.facebook.com/profile.php?id=61567251587676" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="GitHub" width={25} />Facebook</a>
            </div>
          </div>



          {/* Netflim Project */}
          <Modal
            title="Netflim"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpenNetflim}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>Netflim Project</b><br />(System Analysis and Design Course)<br /><br />
              This was a team project for the System Analysis and Design course, developed by a group of 5 members. We collaborated to gather client requirements and translate them into a fully functional web-based movie streaming platform.<br />
              Each member was responsible for a specific subsystem, but I went beyond my assigned role to help complete key components and ensure the overall quality and usability of the platform.<br /><br />
              <b>My Roles and Responsibilities</b><br />
              - Developed the Watch History Module, which tracks users' viewing activity and allows them to revisit previously watched content<br />
              - Includes a privacy feature: Incognito Mode, where watch history is not recorded<br /><br />
              - Designed the entire User Interface (UI) using Figma<br />
              - Designed the Database Schema and entity relationships using Draw.io<br />
              - Built backend controllers and integrated the data layer<br /><br />
              <Image src={EDR_N} alt="" style={{ width: '100%' }} /><br /><br />
              Developed key pages of the application, including:<br />
              -- Home Page<br />
              -- All Movies Page<br />
              -- Login System<br />
              -- Role-Based Access Control for user permissions<br /><br />
              <b>Technologies Used</b><br />
              - React, TypeScript, Golang, Figma, Draw.io
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={n1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n4} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n5} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n6} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n7} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={n8} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Netflim</h2>
            <p className='Project-text-content' onClick={showModalNetflim}>
              <b>Netflim Project</b><br />(System Analysis and Design Course)<br /><br />
              This was a team project for the System Analysis and Design course, developed by a group of 5 members. We collaborated to gather client requirements and translate them into a fully functional web-based movie streaming platform.<br />
              Each member was responsible for a specific subsystem, but I went beyond my assigned role to help complete key components and ensure the overall quality and usability of the platform.<br /><br />
              <b>My Roles and Responsibilities</b><br />
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
              <b>Technologies Used</b><br />
              - React, TypeScript, Golang, Figma, Draw.io
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/testWebForSA" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>

          {/* CTF Cybersecurity Game */}
          <Modal
            title="CTF Cybersecurity Game"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpenCTF}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>CTF Cybersecurity Game</b><br />(Cybersecurity Fundamentals Course Project)<br /><br />
              <Image src={c1} alt="" style={{ width: '100%' }} /><br /><br />
              This was a group project for the Cybersecurity Fundamentals course, where we developed a web-based Capture The Flag (CTF) game that applied cybersecurity concepts learned throughout the semester, including:<br /><br />
              - Data encryption and decryption<br />
              - Use of Symmetric and Asymmetric cryptography<br />
              - Logical puzzle-solving with real-world security principles<br /><br />
              The team consisted of 3 members and the game featured 7 challenges. I was responsible for designing and implementing Levels 5, 6, and 7, which required more complex cryptographic thinking and puzzle creation.<br /><br />
              <b>Roles and Responsibilities</b><br />
              - Built a web-based CTF game applying cybersecurity knowledge<br />
              - Designed and implemented Levels 5–7, incorporating encryption challenges and logic-based tasks<br />
              - Developed the frontend using React and TypeScript<br />
              - Built the backend using Golang<br />
              - Stored challenge data, answers, and player progress using SQLite<br /><br />
              <b>Technologies Used</b><br />
              - React, TypeScript, Golang, SQLite
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={c1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={c2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={c3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={c4} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={c5} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>CTF Cybersecurity Game</h2>
            <p className='Project-text-content' onClick={showModalCTF}>
              <b>CTF Cybersecurity Game</b><br />(Cybersecurity Fundamentals Course Project)<br /><br />
              This was a group project for the Cybersecurity Fundamentals course, where we developed a web-based Capture The Flag (CTF) game that applied cybersecurity concepts learned throughout the semester, including:<br /><br />
              - Data encryption and decryption<br />
              - Use of Symmetric and Asymmetric cryptography<br />
              - Logical puzzle-solving with real-world security principles<br /><br />
              The team consisted of 3 members and the game featured 7 challenges. I was responsible for designing and implementing Levels 5, 6, and 7, which required more complex cryptographic thinking and puzzle creation.<br /><br />
              <b>Roles and Responsibilities</b><br />
              - Built a web-based CTF game applying cybersecurity knowledge<br />
              - Designed and implemented Levels 5–7, incorporating encryption challenges and logic-based tasks<br />
              - Developed the frontend using React and TypeScript<br />
              - Built the backend using Golang<br />
              - Stored challenge data, answers, and player progress using SQLite<br /><br />
              <b>Technologies Used</b><br />
              - React, TypeScript, Golang, SQLite
            </p>
            <div className='Project-button'>
              <a href="https://github.com/wanchaick19/CTF-2567" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>


          {/* GorillaType */}
          <Modal
            title="GorillaType"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpenGorillaType}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>GorillaType – Personal Typing Practice Web App</b><br /><br />
              <Image src={g1} alt="" style={{ width: '100%' }} /><br />
              GorillaType is a solo project I developed to solve a personal pain point I encountered while using Monkeytype — a popular typing practice site. While I practiced daily on Monkeytype, I found its word list limited and not customizable.<br />
              To address this, I created GorillaType, a web-based typing clone that replicates Monkeytype's core functionality but adds the ability to customize the word list, allowing users to practice with their own vocabulary.<br />
              The project is fully deployed and available for public use via GitHub Pages.<br />
              <b>Key Features</b><br />
              - Typing app inspired by Monkeytype<br />
              - Allows users to add and customize word lists<br />
              - Fully responsive design for desktop and mobile<br />
              - Deployed via GitHub Pages for easy access<br />
              <b>Technologies Used</b><br />
              React, TypeScript, HTML, CSS
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={g1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={g2} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>GorillaType</h2>
            <p className='Project-text-content' onClick={showModalGorillaType}>
              <b>GorillaType – Personal Typing Practice Web App</b><br /><br />
              GorillaType is a solo project I developed to solve a personal pain point I encountered while using Monkeytype — a popular typing practice site. While I practiced daily on Monkeytype, I found its word list limited and not customizable.<br />
              To address this, I created GorillaType, a web-based typing clone that replicates Monkeytype's core functionality but adds the ability to customize the word list, allowing users to practice with their own vocabulary.<br />
              The project is fully deployed and available for public use via GitHub Pages.<br />
              <b>Key Features</b><br />
              - Typing app inspired by Monkeytype<br />
              - Allows users to add and customize word lists<br />
              - Fully responsive design for desktop and mobile<br />
              - Deployed via GitHub Pages for easy access<br />
              <b>Technologies Used</b><br />
              React, TypeScript, HTML, CSS
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/MonkeytypeClone" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
              <a href="https://nobpasintumdee.github.io/MonkeytypeClone/" target="_blank" rel="noopener noreferrer">Web page</a>
            </div>

          </div>



          {/* LifeDaily */}
          <Modal
            title="Life Daily"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpenLifeDaily}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>LifeDaily</b> – Online Study Sheet Marketplace (Personal Project)<br /><br />
              <Image src={sh6} alt="" style={{ width: '100%' }} /><br />
              LifeDaily is a personal project built to provide a dedicated platform for students to buy and sell their study sheets and academic notes. The core idea behind the platform is to offer a fairer revenue model for content creators compared to existing platforms.<br />
              Sellers can upload their own materials, set prices freely, and earn 80% of each sale, while the platform retains only 20% as a hosting/service fee. This more generous revenue split gives LifeDaily a competitive edge over other platforms that often retain 30–40%, which is less favorable to creators.<br />
              <br /><b>Key Features</b><br />
              - Transparent and fair profit-sharing model (80/20 split)<br />
              - Tailored for students and academic communities<br />
              - Clean and user-friendly interface<br />
              - Supports user registration, sheet upload, sales tracking, and revenue management<br /><br />
              <b>Project Status</b><br />
              <b>- Frontend (built with React + TypeScript) is mostly complete, featuring:</b><br />
              - Home page<br />
              - Sheet marketplace<br />
              - Seller dashboard<br />
              - Basic payment and access control flow<br /><br />
              <b>- Backend (Node.js + Express + Prisma + SQLite) is currently under active development, with focus on:</b><br />
              - Controller logic<br />
              - Database integration<br />
              - Authentication and transaction management<br /><br />
              <b>Technologies Used</b><br />
              React, TypeScript, Node.js, Express, Prisma, SQLite
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={sh1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={sh2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={sh3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={sh4} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={sh5} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={sh6} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>LifeDaily (In progress)</h2>
            <p className='Project-text-content' onClick={showModalLifeDaily}>
              <b>LifeDaily</b> – Online Study Sheet Marketplace (Personal Project)<br /><br />
              LifeDaily is a personal project built to provide a dedicated platform for students to buy and sell their study sheets and academic notes. The core idea behind the platform is to offer a fairer revenue model for content creators compared to existing platforms.<br />
              Sellers can upload their own materials, set prices freely, and earn 80% of each sale, while the platform retains only 20% as a hosting/service fee. This more generous revenue split gives LifeDaily a competitive edge over other platforms that often retain 30–40%, which is less favorable to creators.<br />
              <br /><b>Key Features</b><br />
              - Transparent and fair profit-sharing model (80/20 split)<br />
              - Tailored for students and academic communities<br />
              - Clean and user-friendly interface<br />
              - Supports user registration, sheet upload, sales tracking, and revenue management<br /><br />
              <b>Project Status</b><br />
              <b>- Frontend (built with React + TypeScript) is mostly complete, featuring:</b><br />
              - Home page<br />
              - Sheet marketplace<br />
              - Seller dashboard<br />
              - Basic payment and access control flow<br /><br />
              <b>- Backend (Node.js + Express + Prisma + SQLite) is currently under active development, with focus on:</b><br />
              - Controller logic<br />
              - Database integration<br />
              - Authentication and transaction management<br /><br />
              <b>Technologies Used</b><br />
              React, TypeScript, Node.js, Express, Prisma, SQLite
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/LifeDaily" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>
          </div>



          {/* Next Workshop To-Do List */}
          <Modal
            title="Life Daily"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpenNext}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>Next Workshop To-Do List – Hands-on Project with Next.js & Prisma</b><br />
              This project started as a personal workshop to explore and experiment with Next.js App Router, integrating it with a SQLite database using Prisma ORM. The goal was to gain practical experience with Server Actions, API routing, and full-stack development in Next.js 13+.<br />
              The result evolved into a functional To-Do List web application with user authentication and individual to-do tracking for each registered user.<br /><br />
              <b>Key Features</b><br />
              - User registration and login<br />
              - Each user has their own personal to-do list<br />
              - Add, edit, delete tasks in real-time<br />
              - Full integration with SQLite via Prisma<br />
              - Experimented with Next.js Server Actions and App Router structure<br /><br />
              <b>Technologies Used</b><br />
              Next.js (App Router), Prisma, SQLite
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={ne1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={ne2} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Next Workshop To-Do List</h2>
            <p className='Project-text-content' onClick={showModalNext}>
              <b>Next Workshop To-Do List – Hands-on Project with Next.js & Prisma</b><br />
              This project started as a personal workshop to explore and experiment with Next.js App Router, integrating it with a SQLite database using Prisma ORM. The goal was to gain practical experience with Server Actions, API routing, and full-stack development in Next.js 13+.<br />
              The result evolved into a functional To-Do List web application with user authentication and individual to-do tracking for each registered user.<br /><br />
              <b>Key Features</b><br />
              - User registration and login<br />
              - Each user has their own personal to-do list<br />
              - Add, edit, delete tasks in real-time<br />
              - Full integration with SQLite via Prisma<br />
              - Experimented with Next.js Server Actions and App Router structure<br /><br />
              <b>Technologies Used</b><br />
              Next.js (App Router), Prisma, SQLite
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/next-workshop" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
            </div>

          </div>




          {/* Flash Loop */}
          <Modal
            title="Flash Loop"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalFlash}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>
              <b>FlashLoop</b><br />Responsive Flashcard Web App for Vocabulary Practice<br /><br />
              FlashLoop is a responsive flashcard-style web application designed to help users practice and memorize vocabulary effectively. Inspired by traditional flashcards, it provides a minimal and intuitive interface that works seamlessly across all devices — from desktops to smartphones.<br />
              The app is fully deployed and available for immediate use via GitHub Pages without any installation required.<br /><br />
              <b>Key Features</b><br />
              - Simulates traditional flashcard-based vocabulary learning<br />
              - Clean and easy-to-use UI<br />
              - Fully responsive and mobile-friendly design<br />
              - Instantly accessible via GitHub Pages<br /><br />
              <b>Technologies Used</b><br />
              React, TypeScript, GitHub Pages
            </p>
          </Modal>
          <div className='side-project'>
            <Carousel autoplay arrows>
              <Image height={200} src={F1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={F2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={F3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={F4} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Next Workshop To-Do List</h2>
            <p className='Project-text-content' onClick={showFlash}>
              <b>FlashLoop</b><br />Responsive Flashcard Web App for Vocabulary Practice<br /><br />
              FlashLoop is a responsive flashcard-style web application designed to help users practice and memorize vocabulary effectively. Inspired by traditional flashcards, it provides a minimal and intuitive interface that works seamlessly across all devices — from desktops to smartphones.<br />
              The app is fully deployed and available for immediate use via GitHub Pages without any installation required.<br /><br />
              <b>Key Features</b><br />
              - Simulates traditional flashcard-based vocabulary learning<br />
              - Clean and easy-to-use UI<br />
              - Fully responsive and mobile-friendly design<br />
              - Instantly accessible via GitHub Pages<br /><br />
              <b>Technologies Used</b><br />
              React, TypeScript, GitHub Pages
            </p>
            <div className='Project-button'>
              <a href="https://github.com/NobpasinTumdee/FlashLoop" target="_blank" rel="noopener noreferrer"><img src={GitPic} alt="GitHub" width={25} />GitHub</a>
              <a href="https://nobpasintumdee.github.io/FlashLoop/#/home" target="_blank" rel="noopener noreferrer">Web page</a>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Projects
