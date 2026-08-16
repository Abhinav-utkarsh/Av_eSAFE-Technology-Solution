// src/components/layout/MainLayout.jsx

import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import GlobalBackground from '../3d/GlobalBackground';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const MainLayout = () => {
  return (
    <>
      {/* Reset scroll position whenever the route changes */}
      <ScrollToTop />

      {/* Global 3D background */}
      <GlobalBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};


export default MainLayout;