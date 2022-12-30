
import './App.css';
import './styles/variables.css';
import Navbar from './components/Navbar.jsx';
import Hero from './scrollpages/Hero.jsx';
import About from './scrollpages/About.jsx';
import Projects from './scrollpages/Projects.jsx';
import Modal from './components/Modal.jsx';
import Tech from './scrollpages/Tech.jsx';
import Contact from './scrollpages/Contact.jsx';
import { useState } from 'react';

export default function App() {
  const [showModal, setShowModal]=useState(null);
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Projects setShowModal={setShowModal}/>
      <Tech setShowModal={setShowModal} />
      <Contact />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

