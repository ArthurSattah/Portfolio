import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experiance from './components/experiance/Experiance';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import MouseShadow from './components/framerMotion/mouse-shadow/MouseShadow';
import { useInView } from 'react-intersection-observer';
const Project = lazy(() => import('./components/project/Project'))
function App() {

  const [projectLoaded, setProjectLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })


  useEffect(() => {
    const hash = window.location.hash;

    if ((hash === '#contact' || hash === '#projects')) {
      const element = document.querySelector(hash); 
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [projectLoaded]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="app" >
      <MouseShadow />
      <Navbar />
      <Hero />
      <About />
      <Experiance />
      <div ref={ref} id="projects">
        {inView ?
          <Suspense fallback={<div className='loading'>Projects Loading...</div>} >
            <Project onLoad={() => { setProjectLoaded(true) }} />
          </Suspense>
          :
          <div style={{ height: "10px" }}></div>}
      </div>
      <Contact />
    </div>
  );
}

export default App;
