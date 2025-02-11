import React, { lazy, Suspense } from 'react'
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experiance from './components/experiance/Experiance';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
const Project = lazy(() => import('./components/project/Project'))
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Experiance />
      <Suspense fallback={<div className='loading'>Projects Loading...</div>}>
        <Project />
      </Suspense>
      <Contact />
    </div>
  );
}

export default App;
