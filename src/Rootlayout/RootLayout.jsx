import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import ThemeModeBottom from "../Components/ThemeModeBottom";
import BackToTopBtn from "../Components/backToTopBtn";

const RootLayout = ({ darkMode, setDarkMode }) => {
  const [showHeader, setShowHeader] = React.useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY === 0) {
      setShowHeader(false);
    } else if (scrollY > 0 && scrollY < 400) {
      setShowHeader(false);
    } else if (scrollY >= 400) {
      setShowHeader(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <ScrollToTop />
      <header
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${darkMode ? "bg-gray-900 shadow-md" : "bg-white shadow-md"}`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main className="relative">
        <Outlet context={{ darkMode, setDarkMode }} />

        <div className="fixed z-50 bottom-5 px-8  hidden lg:block">
          <ThemeModeBottom darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div className="fixed z-50 bg-red-300 ">
          <BackToTopBtn />
        </div>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
};

export default RootLayout;
