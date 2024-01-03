import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import AboutMe from './components/AboutMe';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import SplashPage from './components/SplashPage'; 

import './css/AboutMe.css';
import './css/Menu.css';
import './css/App.css';
import './css/Welcome.css';
import './css/Footer.css';
import './css/ProjectsPage.css';
import './css/ContactPage.css';
import './css/ContactForm.css';

const App = () => {



  useEffect(() => {
    const hasSplashBeenDisplayed = localStorage.getItem('hasSplashBeenDisplayed')

    if (!hasSplashBeenDisplayed) {
      localStorage.setItem('hasSplashBeenDisplayed', 'true')
    }
  }, []);

  return (
    <Router>
      <div className="font-color">
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/home" element={ 
            <Layout>
              <div className="container center">
                <Welcome />
              </div>
              <Footer />
            </Layout>
          } />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;



