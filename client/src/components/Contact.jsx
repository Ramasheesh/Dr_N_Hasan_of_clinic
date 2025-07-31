import React from "react";
import { SocialIcon } from "react-social-icons";
const Contact = () => {
  const contactInfo = [
    {
      icon: <SocialIcon network="whatsapp" url="https://wa.me/919876543210" />,
      title: "Phone",
      details: [
        { label: "+91 9876543210", href: "tel:+919876543210" },
        { label: "+91 8765432109", href: "tel:+918765432109" },
        { label: "Emergency: 24/7", href: "" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <SocialIcon network="email" url="mailto:dr.hasan@clinic.com" />,
      title: "Email",
      details: [
        { label: "dr.hasan@clinic.com", href: "mailto:dr.hasan@clinic.com" },
        { label: "info@hasanclinic.com", href: "mailto:info@hasanclinic.com" },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "⏰",
      title: "Clinic Hours",
      details: [{ label: "Everyday: 2:30 PM - 8:00 PM", href: "" }],
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Reach out to us for appointments, consultations, or general
            inquiries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-4 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏥</span> Get in Touch
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 shadow md:flex items-center justify-center overflow-hidden"
                  >
                    <div
                      className={`flex-shrink-0 text-3xl md:text-4xl  mr-4 p-2 rounded-full bg-gradient-to-r text-white`}
                    >
                      {info.icon}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-gray-800 text-lg mb-4 text-center">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-gray-600 overflow-hidden text-center"
                        >
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="hover:underline text-blue-600"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {detail.label}
                            </a>
                          ) : (
                            detail.label
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
              <div className="text-center">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
                <p className="text-lg mb-2">
                  Call immediately for urgent cardiac care:
                </p>
                <div className="text-3xl font-bold mb-2">+91 9876543210</div>
                <p className="text-sm opacity-75">
                  24/7 emergency service available
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white text-center">
              <h3 className="text-2xl font-bold">Find Us on Map</h3>
              <p className="opacity-75 mt-2">
                Neha Clinic, Mau Road, Sidhari, Azamgarh
              </p>
            </div>
            <div className="w-full h-160 bg-b pt-0.5  mb-4 shadow-lg rounded-lg overflow-hidden">
              <iframe
                title="Dr. N Hasan Clinic Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28732.3789791099!2d83.1717219!3d26.0467953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bd56defdb135%3A0x367cb7664f9e5a18!2sDr%20N%20Hasan!5e0!3m2!1sen!2sin!4v1688839225123!5m2!1sen!2sin&layer=sat"
              ></iframe>
            </div>

            {/* Open in Google Maps Button */}
            <div className="p-6 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/search/?api=1&query=Dr+N+Hasan,+Mau+Rd,+Sidhari,+Azamgarh,+Uttar+Pradesh+276001",
                    "_blank"
                  );
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition"
              >
                📍 Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
