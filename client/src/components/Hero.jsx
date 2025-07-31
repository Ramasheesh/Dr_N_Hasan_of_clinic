import React from "react";
// import heartImage from "../assets/heart.png";
import clinicV2 from "../assets/hert2.mp4";

const Hero = ({ scrollToSection }) => (
  <section
    id="home"
    className="pt-12 md:pt-16 bg-gradient-to-r from-black to-pink-900 text-white"
  >
    <div className="container w-full mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 md:pr-12">
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
      <div className="md:w-1/2 text-center md:text-left md:pl-8">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Caring for Your Heart, Healing with Compassion
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Experience world-class heart care with Dr. N Hasan, Azamgarh’s trusted
          Cardiologist.
        </p>
        <div className="space-x-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => scrollToSection("appointment")}
              className="w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Book Appointment
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-green-400 transition"
            >
              Google Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

