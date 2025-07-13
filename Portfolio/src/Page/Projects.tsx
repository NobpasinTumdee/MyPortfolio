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
            <p className='Project-text-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero quia. Nemo, quae eligendi delectus explicabo quam natus provident beatae corrupti reiciendis, adipisci facere voluptatibus ex! Quasi nesciunt iste, quod illum, commodi debitis omnis expedita tempore voluptate nulla, sunt ex quos necessitatibus dolor odio labore recusandae? Hic maxime sint sit iste voluptas omnis possimus explicabo reprehenderit eius, recusandae quisquam velit esse. Eum minus id reprehenderit, voluptates quia, labore magni nihil quasi assumenda aspernatur voluptate voluptatem placeat nemo et porro perferendis deserunt accusantium a eveniet, omnis esse. Nesciunt, dolor voluptatum? Laborum asperiores inventore doloribus exercitationem, culpa quod ipsam quam magnam perferendis?</p>
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
            <p className='Project-text-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero quia. Nemo, quae eligendi delectus explicabo quam natus provident beatae corrupti reiciendis, adipisci facere voluptatibus ex! Quasi nesciunt iste, quod illum, commodi debitis omnis expedita tempore voluptate nulla, sunt ex quos necessitatibus dolor odio labore recusandae? Hic maxime sint sit iste voluptas omnis possimus explicabo reprehenderit eius, recusandae quisquam velit esse. Eum minus id reprehenderit, voluptates quia, labore magni nihil quasi assumenda aspernatur voluptate voluptatem placeat nemo et porro perferendis deserunt accusantium a eveniet, omnis esse. Nesciunt, dolor voluptatum? Laborum asperiores inventore doloribus exercitationem, culpa quod ipsam quam magnam perferendis?</p>
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
            <p className='Project-text-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero quia. Nemo, quae eligendi delectus explicabo quam natus provident beatae corrupti reiciendis, adipisci facere voluptatibus ex! Quasi nesciunt iste, quod illum, commodi debitis omnis expedita tempore voluptate nulla, sunt ex quos necessitatibus dolor odio labore recusandae? Hic maxime sint sit iste voluptas omnis possimus explicabo reprehenderit eius, recusandae quisquam velit esse. Eum minus id reprehenderit, voluptates quia, labore magni nihil quasi assumenda aspernatur voluptate voluptatem placeat nemo et porro perferendis deserunt accusantium a eveniet, omnis esse. Nesciunt, dolor voluptatum? Laborum asperiores inventore doloribus exercitationem, culpa quod ipsam quam magnam perferendis?</p>
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
            <p className='Project-text-content'>"Capture The Flag" <br /> sit amet consectetur adipisicing elit. Illum, vero quia. Nemo, quae eligendi delectus explicabo quam natus provident beatae corrupti reiciendis, adipisci facere voluptatibus ex! Quasi nesciunt iste, quod illum, commodi debitis omnis expedita tempore voluptate nulla, sunt ex quos necessitatibus dolor odio labore recusandae? Hic maxime sint sit iste voluptas omnis possimus explicabo reprehenderit eius, recusandae quisquam velit esse. Eum minus id reprehenderit, voluptates quia, labore magni nihil quasi assumenda aspernatur voluptate voluptatem placeat nemo et porro perferendis deserunt accusantium a eveniet, omnis esse. Nesciunt, dolor voluptatum? Laborum asperiores inventore doloribus exercitationem, culpa quod ipsam quam magnam perferendis?</p>
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
