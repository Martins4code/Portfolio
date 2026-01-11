"use client"
import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const FaqAndCtaSection = () => {
  // State to track which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // The full list: 5 from your screenshot + 3 new additions
  const faqData = [
    {
      question: "Who is Marcel Apitty?",
      answer: ""
    },
    {
      question: "Are there any upcoming events or exhibitions featuring work?",
      answer: ""
    },
    {
      question: "How can I collaborate with a project?",
      answer: ""
    },
    {
      question: "How can I stay updated latest work and news?",
      answer: ""
    },
    {
      question: "How can I get in touch with Marcel Apitty?",
      answer: ""
    },
    // --- The 3 New Questions ---
    {
      question: "Do you accept international or remote projects?",
      answer: ""
    },
    {
      question: "What does your typical creative process look like?",
      answer: ""
    },
    {
      question: "Do you offer post-project support or maintenance?",
      answer: ""
    }
  ];

  return (
    <div className="py-[60px] z-5 bg-[#e8e8e8] relative block">
      <div className="flex flex-col items-center mx-auto px-[15px] relative">
        
        {/* --- Header Section --- */}
        <div className="opacity-100 mb-10 text-center max-w-[900px] mx-auto">
          <div className="text-[#7000ff]">
            FAQ
          </div>
          <h2 className="text-[30px] text-black tracking-[-1.6px] my-2.5 font-medium leading-[1em]">
            Customers frequently ask
          </h2>
        </div>

        {/* --- FAQ Accordion --- */}

        <div className='flex w-full flex-wrap gap-5 items-start'>
          {/* First Column */}
          <div className="flex flex-col gap-5 w-full md:w-[calc(50%-10px)]">
            {faqData.slice(0, 4).map((item, index) => (
                <motion.div 
                key={index} 
                className="bg-white rounded-[15px] w-full px-[30px] py-5 static"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                >
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-0 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                    <span className="text-gray-900 font-medium text-lg">
                    {item.question}
                    </span>
                    <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                    }`} 
                    />
                </button>
                
                {/* Answer Content */}
                <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                    </p>
                </div>
                </motion.div>
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-5 w-full md:w-[calc(50%-10px)]">
            {faqData.slice(4).map((item, index) => {
              const actualIndex = index + 4;
              return (
                <motion.div 
                key={actualIndex} 
                className="bg-white rounded-[15px] w-full px-[30px] py-5 static"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                >
                <button
                    onClick={() => toggleAccordion(actualIndex)}
                    className="w-full px-0 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                    <span className="text-gray-900 font-medium text-lg">
                    {item.question}
                    </span>
                    <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openIndex === actualIndex ? 'rotate-180' : ''
                    }`} 
                    />
                </button>
                
                {/* Answer Content */}
                <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === actualIndex ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                    </p>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        

       

      </div>
    </div>
  );
};

export default FaqAndCtaSection;