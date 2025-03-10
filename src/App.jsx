import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LandingPageView from './landingPage/pages/LandingPageView';
import Navbar from './shared/Components/Navigation/NavBar/Navbar';
import CategoriesView from './news/pages/CategoriesView';
import Footer from './shared/Components/Navigation/Footer/Footer';
import NavbarDarker from './shared/Components/Navigation/NavBar/NavBarDarker';
import WhatsAppFloat from './shared/Components/ExternalLinks/WhatsAppFloat';


function App() {

  let routes = (
    <Routes>
      <Route path='/' element={<LandingPageView />} />
      <Route path='/categories' element={<CategoriesView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      {/* <Navbar /> */}
      <NavbarDarker />
      <WhatsAppFloat />
      {routes}
      <Footer />
    </Router>
  )
}

export default App
