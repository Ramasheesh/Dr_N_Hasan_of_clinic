import React from "react";
// import heartImage from "../assets/heart.png";
import clinicV2 from "../assets/hert2.mp4";

const Hero = ({ scrollToSection }) => (
  <section
    id="home"
    className="pt-12 md:pt-20 overflow-x-hidden bg-gradient-to-r from-black to-pink-900 text-white"
  >
    <div className="container w-full mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 md:pr-12">
      <h1 className="text-4xl md:text-5xl  mt-4 font-bold text-green-400 mb-16">
          Welcome to Health Care Center
        </h1>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-64 md:h-80 rounded-xl flex items-center justify-center ml-4 md:ml-24 "
        >
          <source src={clinicV2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="md:w-1/2 text-center md:text-left md:pl-8 gap-4">
        <h3 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
          Your Trusted Clinic for Heart, Sugar, Thyroid & Chest Care
        </h3>
        <p className="text-lg text-gray-300 mb-8">
          Experienced doctors | Patient-first approach | Quality health services at affordable cost. <br />
          Located near Health Care Hospital, Nayapul Mau Road, Sidhari – Azamgarh.
        </p>
        <div className="space-x-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => scrollToSection("appointment")}
              className="w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-green-600 transition"
            >
              Book Appointment
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="w-auto px-6 py-3 bg-blue-500 text-gray-100 rounded-lg hover:bg-green-600 transition"
            >
              Google Reviews
            </button>
             <a
            href="tel:+919452895468"
            className="w-auto px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            📞 Emergency Call
          </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
