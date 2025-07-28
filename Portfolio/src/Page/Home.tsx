import { useEffect } from 'react';
import '../Style/Home.css'
import me from '../assets/me.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Skill from './Skill';

import MyCV from '../assets/CV.pdf';
import FlowingMenu from '../component/FlowingMenu';

import GitPic from '../assets/icon/githubICON.png';
import facebook from '../assets/icon/facebookICON.png';
import h1 from '../assets/Project/HoneyPot/h1.png';
import h2 from '../assets/Project/HoneyPot/h2.png';
import h3 from '../assets/Project/HoneyPot/h3.png';
import h4 from '../assets/Project/HoneyPot/h4.png';
import h5 from '../assets/Project/HoneyPot/h5.png';
import h6 from '../assets/Project/HoneyPot/h6.png';

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
import { Carousel, Image } from 'antd';

const demoItems = [
  { link: '#/projects', text: 'Projects', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#/experience', text: 'Experience', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#/about', text: 'About', image: 'https://picsum.photos/600/400?random=4' }
];

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div className='main-home'>
        <div className='main-home-righ'>
          <h1 id="Top" style={{ fontWeight: '900', fontSize: '2.5rem' }} data-aos="fade-down">HI, I'm Nobpasin Tumdee</h1>
          <h2 className='rainbow-text' data-aos="fade-right" data-aos-duration="1000">Frontend Developer And cybersecurity ✨</h2>
          <p style={{ fontWeight: '400', opacity: '0.8' }} className='font-explan' data-aos="fade-up" data-aos-duration="1000">
            ยินดีต้อนรับสู่ Portfolio ของผม <br /> สวัสดีครับ ผม นายนภสินธุ์ ทำดี นักศึกษาวิศวกรรมคอมพิวเตอร์ CPE #27 จากมหาวิทยาลัยเทคโนโลยีสุรนารี<br />ที่นี่คือ เว็บไซต์ Portfolio ของผม คุณสามารถดูผลงาน ความสามารถ จุดเด่น รวมถึง ประวัติและข้อมูลติดต่อ ผมหวังว่าเว็บไซต์นี้จะเป็นประโยชน์กับคุณนะครับ
          </p>
          <div className='social-media' data-aos="fade-down">
            <p>Follow me on: </p>
            <p><Link to={'contact'} style={{ textDecoration: 'none', color: 'var(--body-text-main-color)' }}>Facebook</Link></p>
            <p><Link to={'contact'} style={{ textDecoration: 'none', color: 'var(--body-text-main-color)' }}>GitHub</Link></p>
            <p><Link to={'contact'} style={{ textDecoration: 'none', color: 'var(--body-text-main-color)' }}>IG</Link></p>
          </div>
          <div className='Explore-cv' data-aos="fade-down" data-aos-duration="1000">
            <p className='Explore'><Link to={'projects'} style={{ textDecoration: 'none', color: 'var(--body-text-hover-color)' }}>Explore My Project</Link></p>
            <a href={MyCV} download='CV_Nobpasin.pdf' style={{ textDecoration: 'none' }}>
              <p className='CV'>Download My CV</p>
            </a>
          </div>
          <h3 data-aos="fade-down">Quick Stats:</h3>
          <div className='Explore-cv' data-aos="fade-up" data-aos-duration="1000">
            <p className='Quick-stats'>4 Year in Suranaree University</p>
            <p className='Quick-stats'>React Main Framework</p>
            <p className='Quick-stats'>9+ Projects in University</p>
            <p className='Quick-stats'>GPA 3.51/4.00</p>
          </div>
        </div>

        <div className='main-home-left' data-aos="fade-up" data-aos-duration="1500">
          <img className='profile' src={me} alt="my profile" />
        </div>
      </div>


      <div data-aos="fade-up" style={{ margin: '5% 0' }}>
        <h1 style={{ textAlign: 'center' }} onClick={() => navigate('/projects')}>highlight Projects</h1>
        <div className="Project-container" data-aos="fade-up">

          <div className='side-project highlight' onClick={() => navigate('/projects')}>
            <Carousel autoplay arrows>
              <Image height={200} src={h1} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h2} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h3} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h4} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h5} alt="Picture Project" className='Project-picture' />
              <Image height={200} src={h6} alt="Picture Project" className='Project-picture' />
            </Carousel>
            <h2>Smart tiny HoneyPot</h2>
            <p className='Project-text-content' >
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

          <div className='side-project highlight' onClick={() => navigate('/projects')}>
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
            <p className='Project-text-content' >
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

          <div className='side-project highlight' onClick={() => navigate('/projects')}>
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
            <p className='Project-text-content'>
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
        </div>
      </div>



      <div>
        <Skill />
      </div>
      <div style={{ height: '300px', position: 'relative', backgroundColor: 'var(--body-text-main-color)' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </>
  )
}

export default Home
