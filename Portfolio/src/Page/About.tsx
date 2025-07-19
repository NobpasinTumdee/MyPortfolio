import { useEffect } from 'react';
import me from '../assets/me2.jpg';
import '../Style/About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 data-aos="fade-down">About Me</h1>
        <p data-aos="fade-up" data-aos-duration="1100" style={{ opacity: '0.6' }}>Phan Dung Subdistrict, Kham Thale So District, Nakhon Ratchasima 30280, Thailand </p>
      </div>
      <div className='about-main'>
        <img data-aos="fade-right" data-aos-duration="1800" className='picture' src={me} alt="" />
        <div className='info'>
          <div className='info1'>
            <div style={{ width: '50%', textWrap: 'wrap' }}>
              <h2 data-aos="fade-down">🌞Who Am I</h2>
              <p data-aos="fade-down" data-aos-duration="1200" className='about-info' style={{ opacity: '0.8' }}>
                I am a fourth-year Computer Engineering student with a current GPAX of 3.51. I have a strong interest and hands-on
                experience in both frontend and backend development, along with a foundational understanding of cybersecurity.
                Throughout my academic journey, I have participated in several projects.
              </p>
            </div>
            <div style={{ width: '50%', textWrap: 'wrap' }}>
              <h2 data-aos="fade-down">✨My Approach</h2>
              <p data-aos="fade-down" data-aos-duration="1200" className='about-info' style={{ opacity: '0.8' }}>
                I take a hands-on, full-stack approach to software development, with a strong focus on continuous learning and practical problem-solving. I enjoy building real-world applications with clean UI and scalable logic. I also have a growing interest in cybersecurity, especially in understanding system vulnerabilities and building more secure applications. I value structured thinking, collaboration, and constantly expanding my technical skill set.
              </p>
            </div>
          </div>
          <h2 data-aos="fade-down">👩🏻‍🚀Personal Info</h2>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Name:</span> Nobpasin Tumdee</p>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1400"><span style={{ fontWeight: '600' }}>Date of Birth:</span> September,16-2003</p>
          </div>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1600"><span style={{ fontWeight: '600' }}>Place of Birth:</span> Nakhon Ratchasima</p>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1600"><span style={{ fontWeight: '600' }}>Email:</span> nobpasin579@gmail.com</p>
          </div>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Phone:</span> 061-691-8493</p>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Education:</span> Suranaree University</p>
          </div>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-up" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>GPA:</span> 3.51 / 4.00</p>
            {/* <p className='personal-info' data-aos="fade-left" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>GitHub:</span> https://github.com/NobpasinTumdee</p> */}
            <a href='https://github.com/NobpasinTumdee' data-aos="fade-up" data-aos-duration="1200" className='personal-info-button'>GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
