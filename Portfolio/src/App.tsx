import { createHashRouter, Link } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Projects from './Page/Projects';
import Experience from './Page/Experience';
import Skill from './Page/Skill';
import Contact from './Page/Contact';
import Art from './Page/Art';
import Rootlayout from './Layout/Rootlayout';
import './root.css'

const router = createHashRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <div style={{textAlign: 'center'}}><h1>Not found this page...</h1><h2>return to <Link to={'/'}>Home</Link></h2></div>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "skill", element: <Skill /> },
      { path: "contact", element: <Contact /> },
      { path: "art", element: <Art /> },
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
