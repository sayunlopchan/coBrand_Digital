import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Rootlayout/RootLayout';
import HomePage from './Home/HomePage';
import PageNotFound from './Home/Features/PageNotFound/PageNotFound';
import Service from './Home/Features/Service';
import Contact from './Home/Features/Contact';
import About from './Home/Features/About';

const App = () => {
  // Initialize darkMode from localStorage, defaulting to false if not found
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true'; // localStorage stores values as strings
  });

  useEffect(() => {
    // Update the document class based on darkMode
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the darkMode state in localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout darkMode={darkMode} setDarkMode={setDarkMode} />, children: [
        { index: true, element: <HomePage darkMode={darkMode} /> },
        { path: 'service', element: <Service darkMode={darkMode} /> },
        { path: 'about', element: <About darkMode={darkMode} /> },
        { path: 'contact', element: <Contact darkMode={darkMode} /> },
      ],
    },
    { path: '*', element: <PageNotFound darkMode={darkMode} /> }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
