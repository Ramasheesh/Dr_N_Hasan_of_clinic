import React from 'react';
import { SocialIcon } from 'react-social-icons' 
 

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 py-10 px-10">
  <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    {/* <!-- Clinic Info --> */}
    <div>
      <h2 class="text-2xl font-bold text-white">Dr. N Hasan Clinic</h2>
      <p class="mt-2 text-sm md:pr-12 md:w-10/12">
        Heart & Cardiology Specialist <br />
        Serving Azamgarh and nearby areas with care.
      </p>
    </div>

    {/* <!-- Quick Links --> */}
    <div>
      <h3 class="text-xl font-semibold text-white mb-3">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#about" class="hover:text-white">About Clinic</a></li>
        <li><a href="#services" class="hover:text-white">Our Services</a></li>
        <li><a href="#appointment" class="hover:text-white">Book Appointment</a></li>
        <li><a href="#contact" class="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Contact + Social --> */}
    <div>
      <h3 class="text-xl font-semibold text-white mb-3">Contact</h3>
      <p class="text-sm">
        Mau Road, Sidhari, Azamgarh, UP 276001<br />
        Phone: <a href="tel:+919876543210" class="text-blue-400 hover:text-white">+91 98765 43210</a>
      </p>
      <div className="flex space-x-4 mt-4 text-2xl">
      <div className="hover:bg-blue-600 rounded-full p-1 transition">
        <SocialIcon url="https://facebook.com" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
      <div className="hover:bg-pink-600 rounded-full p-1 transition">
        <SocialIcon url="https://instagram.com" target="_blank" fgColor="white" bgColor="transparent" />
      </div>
      <div className="hover:bg-green-600 rounded-full p-1 transition">
        <SocialIcon url="https://wa.me/919876543210" target="_blank" fgColor="white" bgColor="transparent" />
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
  <div class="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
    © 2025 Dr. N Hasan Clinic. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
