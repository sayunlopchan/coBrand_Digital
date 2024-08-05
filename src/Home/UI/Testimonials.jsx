import React from "react";
import TestimonialSwiper from "../../Components/TestimonialsSwiper";
import Testimonialdata from "../../assets/data/Testimonials_data";

import reviewImg from "../../assets/image/company/customer-review-img.jpg";

const Testimonials = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 p-10 gap-5">
      <section className="">
        <h1 className="font-bold text-4xl">
          Check Out What Our Customers Have to Say.
        </h1>
        <img src={reviewImg} alt="review img" />
      </section>
      <article className="">
        <TestimonialSwiper data={Testimonialdata} />
      </article>
    </div>
  );
};

export default Testimonials;
