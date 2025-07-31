import React from 'react';

const Services = ({ scrollToSection }) => {
  const services = [
    {
      icon: '🫀',
      title: 'Heart Disease Treatment',
      description: 'Comprehensive treatment for various heart conditions including coronary artery disease, heart failure, and arrhythmias.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: '🩺',
      title: 'Cardiac Consultation',
      description: 'Expert consultation for chest pain, shortness of breath, and other cardiac symptoms with detailed assessment.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: 'ECG & Monitoring',
      description: 'Advanced cardiac monitoring including ECG, Holter monitoring, and stress testing for accurate diagnosis.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💊',
      title: 'Preventive Care',
      description: 'Heart health screening, risk assessment, and preventive care plans to maintain optimal cardiovascular health.',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      icon: '🏥',
      title: 'Emergency Care',
      description: '24/7 emergency cardiac care for heart attacks, severe chest pain, and other cardiac emergencies.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '🔄',
      title: 'Follow-up Care',
      description: 'Regular follow-up appointments and monitoring for chronic heart conditions with personalized care plans.',
      gradient: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="text-4xl animate-pulse mr-3">⚕️</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Services
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive cardiac care services designed to keep your heart healthy and strong
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon with Animation */}
              <div className="relative z-10 mb-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {service.icon}
                </div>
                <div className={`w-16 h-1 bg-gradient-to-r ${service.gradient} rounded-full group-hover:w-20 transition-all duration-500`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Circle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-100 via-pink-200 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-110 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <div className="text-3xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Immediate Consultation?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert team is here to provide you with the best cardiac care. Book your appointment today.
            </p>
            <button 
            onClick={() => scrollToSection('appointment')}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;