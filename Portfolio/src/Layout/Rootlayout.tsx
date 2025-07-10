import TextCursor from '../component/TextCursor'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: '70px' }}></div>

      {/* text cursor */}
      <div style={{ width: '100vw', height: '100vh', position: 'fixed' }}>
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
