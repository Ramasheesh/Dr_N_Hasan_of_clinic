import React, { useState, useEffect } from "react";

const TreatedPatients = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    appointments: 0,
    experience: 0,
    satisfaction: 0,
  });

  let finalCounts;
  {
    finalCounts = {
      patients: 5000,
      appointments: 2500,
      experience: 14,
      satisfaction: 100,
    };
  }

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const incrementCounts = () => {
      const increments = {
        patients: finalCounts.patients / steps,
        appointments: finalCounts.appointments / steps,
        experience: finalCounts.experience / steps,
        satisfaction: finalCounts.satisfaction / steps,
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounts({
          patients: Math.min(
            Math.floor(increments.patients * currentStep),
            finalCounts.patients
          ),
          appointments: Math.min(
            Math.floor(increments.appointments * currentStep),
            finalCounts.appointments
          ),
          experience: Math.min(
            Math.floor(increments.experience * currentStep),
            finalCounts.experience
          ),
          satisfaction: Math.min(
            Math.floor(increments.satisfaction * currentStep),
            finalCounts.satisfaction
          ),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepTime);

      return timer;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          incrementCounts();
          observer.unobserve(entry.target);
        }
      });
    });

    const element = document.getElementById("patients");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const achievements = [
    {
      icon: "👥",
      count: counts.patients,
      label: "Patients Treated",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: "📅",
      count: counts.appointments,
      label: "Appointments Booked",
      suffix: "+",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: "📅",
      count: counts.experience,
      label: "Years Experience",
      suffix: "+",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: "⭐",
      count: counts.satisfaction,
      label: "Patient Satisfaction",
      suffix: "%",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
  ];

  const testimonials = [
    {
      name: "Kchitiz Saxena",
      age: null,
      condition: "General Care & Support",
      quote:
        "Dr. Hasan is an exceptional physician who truly exemplifies the epitome of medical excellence and compassionate care. My experience with Dr. Hasan has been nothing short of outstanding… thank you, Dr. Hasan, for your exceptional service and commitment to healing and caring for your patients.",
      rating: 5,
      image: "🧠",
    },
    {
      name: "Venom Gaming channel",
      age: null,
      condition: "Chronic Medication Guidance",
      quote:
        "Dr Neyaz is wonderful doctor. he treats his patients with very less medications. i emphatically recommend him.",
      rating: 5,
      image: "👨‍💻",
    },
    {
      name: "Mohammad Asif Khan",
      age: null,
      condition: "Initial Consultation Experience",
      quote:
        "Dr. Niyaz is a very nice person. From the very first meeting with him, I realized that he is a very capable doctor and a very good person with very good thoughts. May Allah keep them safe.",
      rating: 4,
      image: "👴",
    },
    {
      name: "Priya Singh",
      age: 40,
      condition: "Diabetes & BP Monitoring",
      quote:
        "Very thoughtful and precise diagnosis, medications helped reduce my sugar levels in just a week. Clinic atmosphere and staff behavior are also very good.",
      rating: 5,
      image: "👩",
    },
    {
      name: "Amit Yadav",
      age: 50,
      condition: "Thyroid Check-up",
      quote:
        "Dr. Hasan explained every detail about my thyroid condition, gave clear instructions, and the follow-up routine worked wonders. I’m now symptom‑free!",
      rating: 5,
      image: "👨",
    },
  ];

  return (
    <section
      id="patients"
      className="pt-12 md:pt-20 md:pt-20 overflow-x-hidden bg-gradient-to-r from-black to-pink-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="text-4xl animate-pulse mr-3">🏆</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1FFBFF]">
              Our Achievements
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Years of dedicated service and thousands of satisfied patients trust
            Dr. Hasan for their cardiac care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${achievement.bgColor} rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl group overflow-hidden`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-6xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                  {achievement.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                >
                  {achievement.count.toLocaleString()}
                  {achievement.suffix}
                </div>
                <p className="text-gray-700 font-semibold text-lg">
                  {achievement.label}
                </p>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Patient Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-orange-300 mb-4">
              Patient Success Stories
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real stories from patients whose lives were transformed through
              expert cardiac care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.age} years old
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.condition}</p>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="text-yellow-400 mr-2">
                    {Array(testimonial.rating).fill("⭐").join("")}
                  </div>
                  <div className="text-gray-600 text-sm">
                    Rating: {testimonial.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatedPatients;
