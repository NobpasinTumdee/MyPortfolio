import { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Radio, Timeline } from 'antd';
import '../Style/Experience.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  const [mode, setMode] = useState<'left' | 'alternate' | 'right'>('alternate');

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <h1 data-aos="fade-up" className='Experience-h1'>Experience</h1>

      <div style={{ textAlign: 'center' }} data-aos="flip-up">
        <Radio.Group
          onChange={onChange}
          value={mode}
          style={{
            marginBottom: 20,
          }}
        >
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="alternate">Alternate</Radio>
        </Radio.Group>
      </div>


      <Timeline
        mode={mode}
        className='Timeline'
        items={[
          {
            label: 'July 2025 - Present',
            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
            color: 'green',
            children: (
              <div data-aos="zoom-in-up">
                <h1>A capstone project on Honeypot Systems</h1>
                <h3>Frontend Backend Cybersecurity</h3>
                <p>▪️ designed to detect malicious activity against decoy systems, visualize the data through a dashboard, and provide an integrated AI chatbot for interaction.</p>
                <p>Using : React , TypeScript  , Nodejs , Express.js , JavaScript , Prisma , Python , HTML , CSS , SQLite</p>
                <a href="https://github.com/NobpasinTumdee/dashboard-honeypot.git">GitHub Repositories</a>
              </div>
            ),
          },
          {
            label: 'Nov 2024 - Jan 2025',
            children: (
              <div data-aos="zoom-in-up">
                <h1>A shopping mall management website</h1>
                <h3>Full stack developer</h3>
                <p>Developed stall booking, payment, and event management features</p>
                <p>Implemented user profiles, email notifications, and modern dashboard UI</p>
                <p>Deployed on DigitalOcean with Docker for containerized production setup</p>
                <p>Contributed to core feature development across the platform</p>
                <p>Using : React , TypeScript , Golang , Postman , GitHub , Figma , draw.io , SQLite </p>
                <a href="https://github.com/sut67/team13.git">GitHub Repositories <br /></a>
                <a href="https://www.facebook.com/profile.php?id=61567251587676">Facebook Group</a>
              </div>
            ),
          },
          {
            label: 'July – Sept 2024',
            children: (
              <div data-aos="zoom-in-up">
                <h1>Online Movie Streaming Platform</h1>
                <h3>Full stack developer</h3>
                <p>Built watch history, homepage, and core platform features</p>
                <p>Designed ERD for structured database planning</p>
                <p>Collaborated with team using version control</p>
                <p>Using : React , TypeScript , Golang , GitHub , antd , Bootstrap </p>
                <a href="https://github.com/NobpasinTumdee/testWebForSA.git">GitHub Repositories</a>
              </div>
            ),
          },
          {
            label: 'Mar – Jun 2024',
            children: (
              <div data-aos="zoom-in-up">
                <h1>Flower Shop Management System</h1>
                <h3>Database-Driven Application</h3>
                <p>Designed ER diagram and managed MySQL database</p>
                <p>Hosted local server using XAMPP</p>
                <p>Developed UI and application in C# using Visual Studio 2022</p>
                <p>Using : C# , MySQL</p>
              </div>
            ),
          },
        ]}
      />
    </>
  )
}

export default Experience
