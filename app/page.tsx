import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ChatBot from "../components/Chatbot";

function App() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Hero />
      <Profile />
      <About />
      <Projects />
      <Skills/>
      <ChatBot />
    </div>
  );
}

export default App;