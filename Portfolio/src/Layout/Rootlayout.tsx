import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: '70px' }}></div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Rootlayout
