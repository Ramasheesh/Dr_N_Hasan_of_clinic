import React from "react";
import drHasan from '../assets/drHasan.jpeg';

const doctors = [
  {
    name: "Dr. N. Hasan",
    degrees: "M.B.B.S., M.D., MAPPI, MJARBS",
    specialization:
      "Specialist in Heart, Lungs, Diabetes, Thyroid & Chest Disorders",
    phone: "6386544147",
    image: drHasan, // replace with actual
    experience: "7+ Years of Experience | Founder - Dr. N. Hasan Clinic",
    bio: "Dr. N. Hasan is a highly experienced physician known for his expertise in managing chronic conditions such as hypertension, diabetes, and thyroid disorders. He believes in patient-first care with a focus on accurate diagnosis and long-term health planning.",
  },
  {
    name: "Dr. K. Ajaz",
    degrees: "M.B.B.S. (General Physician)",
    specialization: "Expert in General Medicine, Fever, and Respiratory Care",
    phone: "8737037771",
    image: drHasan, // replace with actual
    experience:
      "Former RMO – Noor Hospital, Mau | 5+ Years of Clinical Experience",
    bio: "Dr. K. Ajaz is dedicated to providing comprehensive medical care with a focus on preventive measures, acute illness treatment, and compassionate patient interaction. Known for his calm demeanor and trusted advice among patients.",
  },
];

const Doctors = () => {
  return (
    <section
      id="doctors"
      className="pt-12 md:pt-20 bg-gradient-to-r from-black to-pink-900 text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-4">
          Meet Our Doctors
        </h2>
        <p className="text-center text-lg text-gray-300 mb-12">
          Experienced and Compassionate Physicians Committed to Your Health
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center space-x-6">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-24 h-24 rounded-full border-4 border-pink-300"
                />
                <div>
                  <h3 className="text-2xl font-bold text-[#FF231F]">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-600">{doc.degrees}</p>
                  <p className="mt-2 text-gray-700">{doc.specialization}</p>
                  <p className="mt-1 text-sm text-gray-600">{doc.experience}</p>
                  <p className="mt-1 text-sm italic text-gray-700">{doc.bio}</p>
                  <p className="mt-1 text-sm text-blue-600">📞 {doc.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
