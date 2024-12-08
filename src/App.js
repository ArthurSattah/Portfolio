import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experiance from './components/experiance/Experiance';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Project from './components/project/Project';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Experiance/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
