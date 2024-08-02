import React, { useState } from 'react';

const Accordian = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "Let us be your one- stop shop for all your creative and marketing needs.whether you're looking to boost your social media presence, build a brand-defining website, capture stunning visuals, or create impactful designs, we are the one for you."
    },
    {
      id: 2,
      question: "Where are you located?",
      answer: "You can reach us in Bhairahawa, Nepal. But we offer our services throughout the country. We're just 20 kilometer north from Butwal."
    },
    {
      id: 3,
      question: "Why should I choose Cobrand Digital?",
      answer: "Having worked with different clients from different industries, we now have vast knowledge of how and what works. Energy, creativity, and experience—we have it."
    },
    {
      id: 4,
      question: "What are your pricing models?",
      answer: "We provide a versatile pricing model that includes both standard packages and customizable options. A clear and transparent quote will be provided based on your requirements."
    },
    {
      id: 4,
      question: 'How do I get started with Cobrand Digital?',
      answer: "Call us for a free consultations. We'll discuss your business goals and needs, and recommend the best course of action."
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold  leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group">
          {questions.map((item, index) => (
            <div
              key={item.id}
              className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 ${openIndex === index ? 'bg-indigo-50 border-indigo-600' : ''
                } mb-8 lg:p-4`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 ${openIndex === index ? 'font-medium text-indigo-600' : ''
                  }`}
                onClick={() => handleToggle(index)}
              >
                <h5 className={`${darkMode ? 'text-gray-600' : ''}`}>{item.question}</h5>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === index ? 'hidden' : 'block'
                    } text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 text-gray-900 transition duration-500 ${openIndex === index ? 'block' : 'hidden'
                    } group-hover:text-indigo-600`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ${openIndex === index ? 'max-h-[250px]' : 'max-h-0'
                  }`}
                aria-labelledby={`accordion-heading-${item.id}`}
              >
                <p className="text-base text-gray-900 font-normal leading-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordian;
