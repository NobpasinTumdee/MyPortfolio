import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: '70px' }}></div>
      <Outlet />
    </>
  )
}

export default Rootlayout
