import React from "react";
import drImg from "../assets/dr.png";
const AboutDoctor = () => {
  return (
    <section
      id="about-doctor"
       className="pt-12 md:pt-20 bg-gradient-to-r from-black to-pink-900 text-white"
  >
    <div className="container w-full mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 md:pr-12 text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Meet <span className="text-red-600">Dr. N Hasan</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            🫀 <strong>Dr. N Hasan</strong> is a renowned{" "}
            <span className="text-blue-600 font-medium">cardiologist</span>{" "}
            based in Azamgarh with over <strong>10 years</strong> of experience
            treating complex heart conditions. Known for his compassionate care
            and remarkable outcomes, he has positively impacted the lives of{" "}
            <strong>thousands of patients</strong>
          </p>
          <h3 className="text-xl font-semibold text-blue-600 dark:text-white mb-2">
            🎓 Professor at PGI Azamgarh
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Dr. Hasan is not only a practicing cardiologist but also serves as a
            dedicated <strong>Professor at PGI Azamgarh</strong>, mentoring
            future doctors with his clinical expertise and real-world knowledge.
          </p>
          <h3 className="text-xl font-semibold text-green-600 dark:text-white mb-2">
            🏆 Nationally Recognized
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            He has been <strong>honored with several prestigious awards</strong>{" "}
            for excellence in cardiology, including recognition for innovative
            treatments and life-saving interventions.
          </p>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-1">
          <img
            src={drImg}
            alt="Dr. n Hasan"
            className="h-64 md:h-80 rounded-xl flex items-center justify-center ml-4 md:ml-24 "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
