import '../Style/Experience.css'
import A1 from '../assets/Art/A1.jpg'
import A2 from '../assets/Art/A2.jpg'
import A3 from '../assets/Art/A3.jpg'
import A4 from '../assets/Art/A4.jpg'
import A5 from '../assets/Art/A5.jpg'
import A6 from '../assets/Art/A6.jpg'
import A7 from '../assets/Art/A7.jpg'
import A8 from '../assets/Art/A8.jpg'
import A9 from '../assets/Art/A9.jpg'
import A10 from '../assets/Art/A10.jpg'
import A11 from '../assets/Art/A11.jpg'
import A12 from '../assets/Art/A12.jpg'
import A13 from '../assets/Art/A13.jpg'
import A14 from '../assets/Art/A14.jpg'
import A15 from '../assets/Art/A15.jpg'
import A16 from '../assets/Art/A16.jpg'
import A17 from '../assets/Art/A17.jpg'
import A18 from '../assets/Art/A18.jpg'
import A21 from '../assets/Art/A21.jpg'
import A22 from '../assets/Art/A22.jpg'

import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Image } from 'antd';

const Art = () => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true,
        });
    }, []);
    return (
        <>
            <div style={{ margin: ' 2% 10% 2%' }} data-aos="fade-right">
                <h1>My Art</h1>
                <p>Besides programming, my hobby is drawing !</p>
            </div>

            <section className="layoutArt">
                <Image data-aos="zoom-in" className='Picture-art' src={A1} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A2} alt="A2" />
                <Image data-aos="zoom-in" className='Picture-art' src={A7} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A8} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A17} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A22} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A9} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A12} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A4} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A5} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A6} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A10} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A11} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A21} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A15} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A18} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A16} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A3} alt="A3" />
                <Image data-aos="zoom-in" className='Picture-art' src={A13} alt="A1" />
                <Image data-aos="zoom-in" className='Picture-art' src={A14} alt="A1" />
            </section>
        </>
    )
}

export default Art
