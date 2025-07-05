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
        <p data-aos="fade-up" data-aos-duration="1100" style={{ opacity: '0.6' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, sapiente.</p>
      </div>
      <div className='about-main'>
        <img data-aos="fade-right" data-aos-duration="1800" className='picture' src={me} alt="" />
        <div className='info'>
          <div className='info1'>
            <div style={{ width: '50%', textWrap: 'wrap' }}>
              <h2 data-aos="fade-down">🌞Who Am I</h2>
              <p data-aos="fade-down" data-aos-duration="1200" style={{ opacity: '0.8' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates ex voluptatibus ut incidunt asperiores, vero iure, alias sint nesciunt nisi maiores recusandae at dolorem natus, consequuntur necessitatibus animi laboriosam?</p>
            </div>
            <div style={{ width: '50%', textWrap: 'wrap' }}>
              <h2 data-aos="fade-down">✨My Approach</h2>
              <p data-aos="fade-down" data-aos-duration="1200" style={{ opacity: '0.8' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptates ex voluptatibus ut incidunt asperiores, vero iure, alias sint nesciunt nisi maiores recusandae at dolorem natus, consequuntur necessitatibus animi laboriosam?</p>
            </div>
          </div>
          <h2 data-aos="fade-down">👩🏻‍🚀Personal Info</h2>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-right" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Name:</span> Nobpasin Tumdee</p>
            <p className='personal-info' data-aos="fade-left" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Date of Birth:</span> September,16-2003</p>
          </div>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-right" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Place of Birth:</span> Nakhon Ratchasima</p>
            <p className='personal-info' data-aos="fade-left" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Email:</span> porporpor579@gmail.com</p>
          </div>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-right" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Phone:</span> 061-691-8493</p>
            <p className='personal-info' data-aos="fade-left" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>Education:</span> Suranaree University</p>
          </div>
          <div className='info1'>
            <p className='personal-info' data-aos="fade-right" data-aos-duration="1200"><span style={{ fontWeight: '600' }}>GPA:</span> 3.51 / 4.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
