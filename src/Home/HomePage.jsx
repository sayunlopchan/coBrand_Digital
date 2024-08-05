import React from "react";
import HomeBanner from "./UI/HomeBanner";
import AboutUs from "./UI/AboutUs";
import OurServices from "./UI/OurServices";

import data from "../assets/data/brand_data";
import SwiperUi from "../Components/SwiperUi";
import GoogleReviews from "./UI/GoogleReviews";
import Testimonials from "./UI/Testimonials";

import MoreDetails from "./UI/MoreDetails";

const HomePage = () => {
  return (
    <div className="px-10">
      <HomeBanner />
      <AboutUs />
      <OurServices />
      <SwiperUi data={data} />
      <MoreDetails />
      <Testimonials />
      <GoogleReviews />
    </div>
  );
};

export default HomePage;
