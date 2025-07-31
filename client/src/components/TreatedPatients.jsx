import React, { useState, useEffect } from 'react';

const TreatedPatients = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    surgeries: 0,
    experience: 0,
    satisfaction: 0
  });

  let finalCounts;
  {
    finalCounts = {
      patients: 15000,
      surgeries: 2500,
      experience: 20,
      satisfaction: 98,
    };
  }

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const incrementCounts = () => {
      const increments = {
        patients: finalCounts.patients / steps,
        surgeries: finalCounts.surgeries / steps,
        experience: finalCounts.experience / steps,
        satisfaction: finalCounts.satisfaction / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounts({
          patients: Math.min(Math.floor(increments.patients * currentStep), finalCounts.patients),
          surgeries: Math.min(Math.floor(increments.surgeries * currentStep), finalCounts.surgeries),
          experience: Math.min(Math.floor(increments.experience * currentStep), finalCounts.experience),
          satisfaction: Math.min(Math.floor(increments.satisfaction * currentStep), finalCounts.satisfaction)
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

    const element = document.getElementById('patients');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const achievements = [
    {
      icon: '👥',
      count: counts.patients,
      label: 'Patients Treated',
      suffix: '+',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: '🏥',
      count: counts.surgeries,
      label: 'Successful Procedures',
      suffix: '+',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: '📅',
      count: counts.experience,
      label: 'Years Experience',
      suffix: '+',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      icon: '⭐',
      count: counts.satisfaction,
      label: 'Patient Satisfaction',
      suffix: '%',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      age: 45,
      condition: 'Heart Attack Recovery',
      quote: 'Dr. Hasan saved my life during my heart attack. His quick diagnosis and treatment gave me a second chance at life.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      age: 38,
      condition: 'Hypertension Management',
      quote: 'Excellent care and regular monitoring. Dr. Hasan helped me control my blood pressure effectively.',
      rating: 5,
      image: '👩‍🏫'
    },
    {
      name: 'Mohammed Ali',
      age: 62,
      condition: 'Bypass Surgery',
      quote: 'Professional and caring approach. The bypass surgery was successful and recovery was smooth.',
      rating: 5,
      image: '👨‍🌾'
    },
    {
      name: 'Sunita Devi',
      age: 55,
      condition: 'Arrhythmia Treatment',
      quote: 'My irregular heartbeat is now under control. Dr. Hasan is truly an expert in his field.',
      rating: 5,
      image: '👩‍🦳'
    }
  ];

  return (
    <section id="patients" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="text-4xl animate-pulse mr-3">🏆</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Achievements
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Years of dedicated service and thousands of satisfied patients trust Dr. Hasan for their cardiac care
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
                animationDelay: `${index * 200}ms`
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
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                  {achievement.count.toLocaleString()}{achievement.suffix}
                </div>
                <p className="text-gray-700 font-semibold text-lg">
                  {achievement.label}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Patient Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Patient Success Stories</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from patients whose lives were transformed through expert cardiac care
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
                    <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.age} years old</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.condition}</p>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="text-yellow-400 mr-2">{Array(testimonial.rating).fill('⭐').join('')}</div>
                  <div className="text-gray-600 text-sm">Rating: {testimonial.rating}</div>
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