import TextCursor from '../component/TextCursor'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import '../Style/Nav.css'

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <div className='gaplayout'></div>

      {/* text cursor */}
      <div style={{ width: '100vw', height: '100vh', position: 'fixed' ,zIndex: '0'}}>
        <TextCursor
          text="✨"
          delay={0.1}
          spacing={50}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={4}
          maxPoints={5}
        />
      </div>

      <Outlet />
      <Footer />
    </>
  )
}

export default Rootlayout
