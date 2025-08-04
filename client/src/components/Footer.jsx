import React from 'react';
import { SocialIcon } from 'react-social-icons' 
 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-10">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    {/* <!-- Clinic Info --> */}
    <div>
      <h2 className="text-2xl font-bold text-white">Dr. N Hasan Clinic</h2>
      <p className="mt-2 text-sm md:pr-12 md:w-10/12">
        Heart & Cardiology Specialist <br />
        Serving Azamgarh and nearby areas with care.
      </p>
      <p><a href="tel:+918874910202" className="text-sm hover:text-blue-400 hover:text-white">📞 Designed by @Ashish</a></p>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#about" className="hover:text-white">About Clinic</a></li>
        <li><a href="#services" className="hover:text-white">Our Services</a></li>
        <li><a href="#appointment" className="hover:text-white">Book Appointment</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Contact + Social --> */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
      <p className="text-sm">
        Mau Road, Sidhari, Azamgarh, UP 276001<br />
        Phone: <a href="tel:+917905688034" className="text-blue-400 hover:text-white">+91 7905688034</a>
      </p>
      <div className="flex space-x-4 mt-4 text-2xl">
      <div className="hover:bg-blue-600 rounded-full p-1 transition">
        <SocialIcon url="https://facebook.com" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
      <div className="hover:bg-pink-600 rounded-full p-1 transition">
        <SocialIcon url="https://instagram.com" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
      <div className="hover:bg-green-600 rounded-full p-1 transition">
        <SocialIcon url="https://wa.me/9452895468" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
      <div className="hover:bg-sky-600 rounded-full p-1 transition">
        <SocialIcon url="https://twitter.com" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
      <div className="hover:bg-red-600 rounded-full p-1 transition">
        <SocialIcon url="https://youtube.com" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
    </div>

    </div>
  </div>

  {/* <!-- Bottom --> */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
    © 2025 Dr. N Hasan Clinic. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
