import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Rootlayout/RootLayout';
import HomePage from './Home/HomePage';
import PageNotFound from './Home/Features/PageNotFound/PageNotFound';
import Service from './Home/Features/Service';
import Contact from './Home/Features/Contact';
import Courses from './Home/Features/Courses';
import About from './Home/Features/About';



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout darkMode={darkMode} setDarkMode={setDarkMode} />, children: [
        { index: true, element: <HomePage darkMode={darkMode} /> },
        { path: 'service', element: <Service darkMode={darkMode} /> },
        { path: 'courses', element: <Courses darkMode={darkMode} /> },
        { path: 'about', element: <About darkMode={darkMode} /> },
        { path: 'contact', element: <Contact darkMode={darkMode} /> },
      ],
    },
    { path: '*', element: <PageNotFound darkMode={darkMode} /> }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App