import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Style/Nav.css'

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);
    return (
        <div className='footer' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <h1>Thank You</h1>
            <h2>SUPALAI !!! Please hire me 😝</h2>
        </div>
    )
}

export default Footer
