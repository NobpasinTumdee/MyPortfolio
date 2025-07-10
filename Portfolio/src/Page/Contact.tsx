import { useEffect, useState } from 'react';
import '../Style/Contact.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import QR from '../assets/Click_it.jpg'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [isActive, setActive] = useState(true);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 data-aos="fade-down">Contact Me</h1>
        <p data-aos="fade-up" data-aos-duration="1100" style={{ opacity: '0.6' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, sapiente.</p>
      </div>
      <div className='contact-button'>
        <p onClick={() => setActive(true)} className={`contact-button-sub ${isActive ? 'active' : ''}`}>☎️ Contact Me</p>
        <p onClick={() => setActive(false)} className={`contact-button-sub ${isActive ? '' : 'active'}`}>💝 Support Me</p>
      </div>
      {isActive ? (
        <div style={{ margin: '0 0 10%' }}>
          <div className='contact-main' data-aos="fade-right" data-aos-duration="1000">
            <a href='https://github.com/NobpasinTumdee' className='contact-sub'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='logo-contact'>🌞</p>
                <div>
                  <h2 style={{ margin: '0' }}>GitHub</h2>
                  <p style={{ margin: '0', opacity: '0.6' }}>Explore my code & projects.</p>
                </div>
              </div>
              <p>▶</p>
            </a>
          </div>
          <div className='contact-main' data-aos="fade-left" data-aos-duration="1200">
            <a href='https://www.facebook.com/nobpasin.tamdee/' className='contact-sub'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='logo-contact'>🩵</p>
                <div>
                  <h2 style={{ margin: '0' }}>Facebook</h2>
                  <p style={{ margin: '0', opacity: '0.6' }}>The fastest way to contact me is Facebook.</p>
                </div>
              </div>
              <p>▶</p>
            </a>
          </div>
          <div className='contact-main' data-aos="fade-right" data-aos-duration="1400">
            <a href='https://www.instagram.com/porgzzz/' className='contact-sub'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='logo-contact'>🩷</p>
                <div>
                  <h2 style={{ margin: '0' }}>Instagram</h2>
                  <p style={{ margin: '0', opacity: '0.6' }}>My visual journal & life updates.</p>
                </div>
              </div>
              <p>▶</p>
            </a>
          </div>
          <div className='contact-main' data-aos="fade-left" data-aos-duration="1600">
            <div className='contact-sub'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='logo-contact'>✉️</p>
                <div>
                  <h2 style={{ margin: '0' }}>Gmail</h2>
                  <p style={{ margin: '0', opacity: '0.6' }}>nobpasin579@gmail.com</p>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='support'>
            <img className='PromptPay' src={QR} alt="" data-aos="fade-up" />
          </div>
        </>
      )}
    </>
  )
}

export default Contact
