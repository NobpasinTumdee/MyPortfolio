import { useEffect } from 'react';
import '../Style/Home.css'
import me from '../assets/me.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Skill from './Skill';

const Home = () => {
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
          <h1 style={{ fontWeight: '900',fontSize:'2.5rem' }} data-aos="fade-down">HI, I'm Nobpasin Tumdee</h1>
          <h2 className='rainbow-text' data-aos="fade-right" data-aos-duration="1000">Frontend Developer And cybersecurity ✨</h2>
          <p style={{ fontWeight: '400', opacity: '0.8' }} className='font-explan' data-aos="fade-left" data-aos-duration="1000">
            ยินดีต้อนรับสู่ Portfolio ของผม <br /> สวัสดีครับ ผม นายนภสินธุ์ ทำดี นักศึกษาวิศวกรรมคอมพิวเตอร์ CPE #27 จากมหาวิทยาลัยเทคโนโลยีสุรนารี<br />ที่นี่คือ เว็บไซต์ Portfolio ของผม คุณสามารถดูผลงาน ความสามารถ จุดเด่น รวมถึง ประวัติและข้อมูลติดต่อ ผมหวังว่าเว็บไซต์นี้จะเป็นประโยชน์กับคุณนะครับ
          </p>
          <div className='social-media' data-aos="fade-down">
            <p>Follow me on: </p>
            <p>facebook</p>
            <p>github</p>
            <p>ig</p>
          </div>
          <div className='Explore-cv' data-aos="fade-down" data-aos-duration="1000">
            <p className='Explore'><Link to={'projects'} style={{textDecoration: 'none',color:'var(--body-text-hover-color)'}}>Explore My Project</Link></p>
            <p className='CV'>Download My CV</p>
          </div>
          <h3 data-aos="fade-down">Quick Stats:</h3>
          <div className='Explore-cv' data-aos="fade-up" data-aos-duration="1000">
            <p className='Quick-stats'>4 Year in Suranaree University</p>
            <p className='Quick-stats'>React Main Framework</p>
            <p className='Quick-stats'>3 Projects in University</p>
            <p className='Quick-stats'>GPA 3.51/4.00</p>
          </div>
        </div>

        <div className='main-home-left' data-aos="fade-up" data-aos-duration="1500">
          <img className='profile' src={me} alt="my profile" />
        </div>
      </div>
      <div>
        <Skill />
      </div>
    </>
  )
}

export default Home
