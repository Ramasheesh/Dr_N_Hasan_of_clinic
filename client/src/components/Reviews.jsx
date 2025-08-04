import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Amit Singh',
      rating: 5,
      date: '2 weeks ago',
      review: 'Excellent cardiologist! Dr. Hasan diagnosed my heart condition accurately and provided the best treatment. The clinic is well-equipped and staff is very cooperative.',
      avatar: '👨‍💼',
      verified: true
    },
    {
      id: 2,
      name: 'Kavita Sharma',
      rating: 5,
      date: '1 month ago',
      review: 'Dr. Hasan is extremely knowledgeable and caring. He explained my heart problem in detail and gave me confidence throughout the treatment. Highly recommended!',
      avatar: '👩‍🦳',
      verified: true
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      rating: 5,
      date: '2 months ago',
      review: 'Best cardiac care in Azamgarh! Dr. Hasan saved my father\'s life during emergency. His expertise and quick response made all the difference.',
      avatar: '👨‍🌾',
      verified: true
    },
    {
      id: 4,
      name: 'Neha Gupta',
      rating: 5,
      date: '3 months ago',
      review: 'Professional and compassionate doctor. The consultation was thorough and Dr. Hasan made sure I understood everything about my heart health.',
      avatar: '👩‍🏫',
      verified: true
    },
    {
      id: 5,
      name: 'Suresh Yadav',
      rating: 5,
      date: '4 months ago',
      review: 'Outstanding service! From appointment booking to treatment, everything was smooth. Dr. Hasan is truly an expert in cardiology.',
      avatar: '👨‍🔧',
      verified: true
    },
    {
      id: 6,
      name: 'Pooja Mishra',
      rating: 5,
      date: '5 months ago',
      review: 'Very satisfied with the treatment. Dr. Hasan is patient, listens carefully, and provides the best medical advice. Clean and modern clinic facilities.',
      avatar: '👩‍⚕️',
      verified: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleReviewClick = (index) => {
    setCurrentReviewIndex(index);
  };

  // const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section id="reviews" 
        className="pt-12 md:pt-20 md:pt-20 overflow-x-hidden bg-gradient-to-r from-black to-pink-900 text-white"
>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="text-4xl animate-bounce mr-3">⭐</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1FFBFF]">
              Patient Reviews
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - see what our patients have to say about their experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Google Reviews Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-4">🏥</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Dr. N Hasan's Clinic</h3>
                <p className="text-gray-600">Cardiology Center • Azamgarh</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-4">
              <div className="flex text-3xl mr-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                ))}
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">{4.9}</div>
                <div className="text-gray-600">{260+totalReviews} Google Reviews</div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2 max-w-md mx-auto mb-6">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center text-sm">
                  <span className="mr-1">{stars}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: stars === 5 ? '100%' : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Review */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
            <div className="flex items-start mb-4">
              <div className="text-4xl mr-4 animate-bounce">{reviews[currentReviewIndex].avatar}</div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h4 className="font-bold text-gray-800 mr-2">{reviews[currentReviewIndex].name}</h4>
                  {reviews[currentReviewIndex].verified && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">{reviews[currentReviewIndex].date}</span>
                </div>
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              "{reviews[currentReviewIndex].review}"
            </blockquote>
          </div>

          {/* Review Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleReviewClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                index === currentReviewIndex ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              onClick={() => handleReviewClick(index)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-3">{review.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                    {review.verified && (
                      <span className="ml-2 text-blue-500 text-xs">✓</span>
                    )}
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Button */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Had a great experience with Dr. Hasan? Help others by sharing your review on Google.
            </p>
            <div className="space-y-4">
              <a
                href="https://www.google.com/search?q=Dr+Hasan+Cardiology+Clinic+Azamgarh&lqi=CiNEciBIYXNhbiBDYXJkaW9sb2d5IENsaW5pYyBBemFtZ2FyaEi4z4SAprmAgAhaMxAAEAEQAhADGAAYARgEIiNkciBoYXNhbiBjYXJkaW9sb2d5IGNsaW5pYyBhemFtZ2FyaJIBDm1lZGljYWxfY2xpbmljqgF3CggvbS8wMW5kOBABKh4iGmRyIGhhc2FuIGNhcmRpb2xvZ3kgY2xpbmljKAAyIBABIhzVibXxfoaYJBkwy9BsbVJwxV5vaAkCdQezB_sNMicQAiIjZHIgaGFzYW4gY2FyZGlvbG9neSBjbGluaWMgYXphbWdhcmg#lkt=LocalPoiReviews&rlimm=3926214625210554904&lrd=0x3991bd56defdb135:0x367cb7664f9e5a18,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2">🌟</span>
                Write a Google Review
              </a>
              <div className="text-sm text-gray-500">
                Click to visit our Google Business profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;