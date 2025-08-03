import React, { useState } from "react";
import Axios from "axios";
const BookAppointment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    age: "",
    gender: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const formBody = Object.entries(formData)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

      await fetch(
        "https://script.google.com/macros/s/AKfycbydT8UxQxkySzVJCUJv3ZFPFDXkGuta-K9EIFnXr_Sjkk5EjJt34cCJx28O17Vv-EDSLA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: formBody,
        }
      );

      setSubmitStatus("success");
      alert("Appointment booked successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        age: "",
        gender: "",
        reason: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error: Submission failed.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  const timeSlots = [
    // "10:00 AM",
    // "10:30 AM",
    // "11:00 AM",
    // "11:30 AM",
    // "12:00 PM",
    // "12:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  return (
    <section
      id="appointment"
      className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="text-4xl animate-bounce mr-3">📅</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Book Appointment
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your consultation with Dr. N Hasan for expert cardiac care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-8 text-white text-center">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-2">Dr. N Hasan's Clinic</h3>
              <p className="opacity-90">Expert Cardiology Care • Azamgarh</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">👤</span> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">📱</span> Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">📧</span> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">📊</span> Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    max="120"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                    placeholder="Enter your age"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">⚧</span> Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* Reason */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">📝</span> Reason for Visit
                  </label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                    required
                  >
                    <option value="">Select reason</option>
                    <option value="Treatment">Treatment</option>
                    <option value="Medicine Sale">Medicine Sale</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <span className="mr-2">📅</span> Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 hover:border-red-300"
                  />
                </div>
              </div>

              {/* Time Slot */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <span className="mr-2">🕐</span> Preferred Time *
                </label>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                  {timeSlots.map((time) => (
                    <label key={time} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <div
                        className={`p-2 text-center rounded-lg border-2 transition-all duration-300 text-sm font-medium
                        ${
                          formData.time === time
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50"
                        }`}
                      >
                        {time}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl
                    ${
                      isSubmitting
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600"
                    }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Booking Appointment...
                    </div>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </div>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 bg-green-100 border border-green-300 rounded-full text-green-800 font-semibold">
                    <span className="mr-2">✅</span>
                    Appointment booked successfully! We'll contact you soon.
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-bold text-gray-800 mb-2">Clinic Hours</h4>
              <p className="text-gray-600">
                Mon - Sat
                <br />
                10 AM to 6 PM
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-3">🚨</div>
              <h4 className="font-bold text-gray-800 mb-2">Emergency</h4>
              <p className="text-gray-600">24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
