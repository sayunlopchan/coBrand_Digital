import React from "react";
import HomeBanner from "./UI/HomeBanner";
import AboutUs from "./UI/AboutUs";
import OurServices from "./UI/OurServices";

import data from "../assets/data/brand_data";
import SwiperUi from "../Components/SwiperUi";
import GoogleReviews from "./UI/GoogleReviews";
import Testimonials from "./UI/Testimonials";
import { DarkModeProvider } from "../ContextProvider/DarkModeContext";

const HomePage = ({ darkMode }) => {
  return (
    <div className="px-10">
      <DarkModeProvider darkMode={darkMode}>
        <HomeBanner />
        <AboutUs />
        <OurServices />
        <SwiperUi data={data} />
        <Testimonials />
        <GoogleReviews />
      </DarkModeProvider>
    </div>
  );
};

export default HomePage;
