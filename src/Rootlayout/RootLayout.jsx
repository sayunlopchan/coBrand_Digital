import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';
import ThemeModeBottom from '../Components/ThemeModeBottom';

const RootLayout = ({ darkMode, setDarkMode }) => {
  const [showHeader, setShowHeader] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <ScrollToTop />
      <header
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${showHeader ? 'translate-y-0' : '-translate-y-full'} ${darkMode ? 'bg-gray-900 shadow-md' : 'bg-white shadow-md'}`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main className='pt-[60px] relative'> {/* Adjust padding to account for header height */}
        <Outlet context={{ darkMode, setDarkMode }} />

        <div className='sticky bottom-4 px-4 hidden lg:block'>
          <ThemeModeBottom darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default RootLayout;
