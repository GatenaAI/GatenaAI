import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import WallOfFame from './components/WallOfFame/WallOfFame'; 
import { LanguageProvider } from './context/LanguageContext';
import './styles/colors.css';

export default function App() {
  const [isWorkingWithUs, setIsWorkingWithUs] = useState(true);

  return (
    <LanguageProvider>
      <AnimatedBackground />
      <Navbar
        isWorkingWithUs={isWorkingWithUs}
        setIsWorkingWithUs={setIsWorkingWithUs}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isWorkingWithUs={isWorkingWithUs}
              setIsWorkingWithUs={setIsWorkingWithUs}
            />
          }
        />
        <Route path="/walloffame" element={<WallOfFame />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}
