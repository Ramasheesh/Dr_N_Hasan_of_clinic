import React from "react";
import clinicV from "../assets/hertv.mp4";

const AboutClinic = () => {
  return (
    <section
      id="about"
       className="pt-12 md:pt-20 bg-gradient-to-r from-black to-pink-900 text-white"
  >
    <div className="container w-full mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
         {/* Image Section */}
        <div className="md:w-1/2 md:pl-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-64 md:h-80 rounded-xl flex items-center justify-center ml-4 md:ml-24 "
          >
            <source src={clinicV} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-400">
            Welcome to Health Care Center  by Dr. N Hasan
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Health Care Center</strong>, led by <strong>Dr. N Hasan</strong>,
            is a premier heart care center located in Sidhari, Azamgarh. With a
            commitment to clinical excellence and compassionate care, we
            specialize in diagnosing, treating, and managing all kinds of heart
            conditions.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our clinic is equipped with the latest cardiology technology and a
            patient-friendly environment, ensuring that you feel safe and
            supported throughout your treatment journey.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Conveniently located on <strong>Mau Road</strong>, our clinic is
            easily accessible. Click the button below to get directions directly
            on Google Maps.
          </p>
          <a
            href="https://www.google.com/maps/dir/25.8112085,83.2042494/Dr+N+Hasan,+Mau+Rd,+Sidhari,+Azamgarh,+Uttar+Pradesh+276001/@25.9392895,82.8745451,14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3991bd56defdb135:0x367cb7664f9e5a18!2m2!1d83.1907219!2d26.0467953?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
          >
            📍 Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
