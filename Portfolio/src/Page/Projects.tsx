import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Project.css';
import shopping from '../assets/shoppingmall.png';

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="Project">
        <h1 data-aos="fade-left">MY PROJECTS</h1>
        <div className='arrow'>
          <div className="Project-main">

            <div className='Project-slide' data-aos="fade-down" data-aos-duration="1000">
              <img className='picture-project' src={shopping} alt="" />
              <div className='info-project'>
                <div>
                  <h2 style={{margin:'0'}}>Shopping Mall G-13</h2>
                  <p style={{ opacity: '0.7',margin:'0',lineHeight:'18px'}}>เป็นหนึ่งในสมาชิกในทีมที่สร้างระบบห้างสรรพสินค้า <br />ระบบย่อยที่รับผิดชอบ<br />- ระบบจองพื้นที่ขายสินค้า<br />- ระบบชำระเงิน<br />- และฟีเจอร์ย่อยส่วนใหญ่ของทีม</p>
                </div>
                <a href="https://github.com/sut67/team13.git" className='navigator'>
                  🔗
                </a>
              </div>
            </div>

            <div className='Project-slide' data-aos="fade-down" data-aos-duration="1400">
              <img className='picture-project' src="https://assets.justinmind.com/wp-content/uploads/2020/10/video-hero-image-example.png" alt="" />
              <div className='info-project'>
                <div>
                  <h2>My project</h2>
                  <p style={{ opacity: '0.7' }}>Web Shopping Mall.</p>
                </div>
                <a href="https://github.com/NobpasinTumdee?tab=repositories" className='navigator'>
                  🔗
                </a>
              </div>
            </div>

            <div className='Project-slide' data-aos="fade-down" data-aos-duration="1800">
              <img className='picture-project' src="https://assets.justinmind.com/wp-content/uploads/2020/10/video-hero-image-example.png" alt="" />
              <div className='info-project'>
                <div>
                  <h2>My project</h2>
                  <p style={{ opacity: '0.7' }}>Web Shopping Mall.</p>
                </div>
                <a href="https://github.com/NobpasinTumdee?tab=repositories" className='navigator'>
                  🔗
                </a>
              </div>
            </div>

            <div className='Project-slide' data-aos="fade-down" data-aos-duration="2200">
              <img className='picture-project' src="https://assets.justinmind.com/wp-content/uploads/2020/10/video-hero-image-example.png" alt="" />
              <div className='info-project'>
                <div>
                  <h2>My project</h2>
                  <p style={{ opacity: '0.7' }}>Web Shopping Mall.</p>
                </div>
                <a href="https://github.com/NobpasinTumdee?tab=repositories" className='navigator'>
                  🔗
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Projects
