import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const SuccessStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedModal, setSelectedModal] = useState<any>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const testimonials = [
    {
      id: 0,
      name: "Shaju",
      comment: "Amazing body transformation.",
      detailedComment: "Check the Body Transformation after choosing our Service. NB: Result are not typical individual result will vary.",
      images: [
        "/testimonials/tst0_x.png",
      ]
    },
    {
      id: 1,
      name: "Renjini Rajesh",
      comment: "Amazing body transformation.",
      detailedComment: "Check the Body Transformation after choosing our Service. NB: Result are not typical individual result will vary.",
      images: [
        "/testimonials/tst1.png",
      ]
    },
    {
      id: 2,
      name: "Augustine",
      rating: 5,
      comment: "Check the body transformation after choosing our service.",
      detailedComment: "Check the body transformation after choosing our service.",
      images: [  
        "/testimonials/tst2.png",
        "/testimonials/tst2_x.png",
      ]
    },
    {
      id: 3,
      name: "Sadanandan",
      rating: 5,
      comment: "Check the body transformation after choosing our service.",
      detailedComment: "Check the body transformation after choosing our service.",
      images: [
        "/testimonials/tst3.png",
      ]
    },
    {
      id: 4,
      name: "E.P. Mercy",
      rating: 5,
      comment: "EP Mercy achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      detailedComment: "EP Mercy achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      images: [
        "/testimonials/tst4.png",
      ]
    },
    {
      id: 5,
      name: "Rajesh",
      rating: 5,
      comment: "Rajesh achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      detailedComment: "Rajesh achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      images: [
        "/testimonials/tst5.png",
        "/testimonials/tst5_x.png",
      ]
    },
    {
      id: 6,
      name: "Rishikeshan",
      rating: 5,
      comment: "Rishikeshan achieved an incredible 12 kg weight loss with the help of our personalized services.",
      detailedComment: "Rishikeshan achieved an incredible 12 kg weight loss with the help of our personalized services.",
      images: [
        "/testimonials/tst6.png",
      ]
    },
    {
      id: 7,
      name: "Asha Sadanandan",
      rating: 5,
      comment: "Asha Sadanandan achieved an incredible 10 kg weight loss with the help of our personalized services.",
      detailedComment: "Asha Sadanandan achieved an incredible 10 kg weight loss with the help of our personalized services.",
      images: [
        "/testimonials/tst7.png",
      ]
    },
    {
      id: 8,
      name: "Shamil",
      rating: 5,
      comment: "Excellent customer service and results!",
      detailedComment: "The customer service at Regain Life Nutrition Centre is second to none. When I had questions about which supplements to choose for my goals, their team spent time understanding my needs and created a personalized plan. The results speak for themselves - I've never felt healthier or more energetic.",
      images: [
        "/testimonials/tst8.png",
      ]
    },
    {
      id: 9,
      name: "Kiranjith",
      rating: 5,
      comment: "Check the body transformation after choosing our service.",
      detailedComment: "Check the body transformation after choosing our service.",
      images: [
        "/testimonials/tst9.png",
      ]
    },
    {
      id: 10,
      name: "Sadanandan's family",
      rating: 5,
      comment: "Check the body transformation after choosing our service.",
      detailedComment: "Check the body transformation after choosing our service.",
      images: [
        "/testimonials/tst10.png",
      ]
    },
    {
      id: 11,
      name: "Vinesh",
      rating: 5,
      comment: "Weight loss of 4 Kgs.",
      detailedComment: "Weight loss of 4 Kgs.",
      images: [
        "/testimonials/tst11.png",
      ]
    },
    {
      id: 12,
      name: "",
      rating: 5,
      comment: "Weight loss of 9.5 Kgs.",
      detailedComment: "Weight loss of 9.5 Kgs.",
      images: [
        "/testimonials/tst12.png",
      ]
    },
    {
      id: 13,
      name: "",
      rating: 5,
      comment: "",
      detailedComment: "",
      images: [
        "/testimonials/tst13.png",
      ]
    },
    {
      id: 14,
      name: "",
      rating: 5,
      comment: "",
      detailedComment: "",
      images: [
        "/testimonials/tst14.png",
      ]
    },
    {
      id: 15,
      name: "Santhosh",
      rating: 5,
      comment: "Santhosh achieved an incredible 22 kgs weight loss with the help of our personalized services.",
      detailedComment: "Santhosh achieved an incredible 22 kgs weight loss with the help of our personalized services.",
      images: [
        "/testimonials/tst15.png",
      ]
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" className="bg-white text-green-600 hover:bg-gray-100 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Real transformations from real people. See how RXNutrition has helped our customers achieve their health and fitness goals.
              These inspiring stories showcase the power of dedication combined with premium nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} onOpenModal={setSelectedModal} />
            ))}
          </div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged view"
              className="max-w-full h-96 object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">{selectedModal.data.name}'s Story</h2>
              <button onClick={() => setSelectedModal(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedModal.data.images.map((image: string, index: number) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedModal.data.name} ${index === 0 ? 'profile' : `transformation ${index}`}`}
                      className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setEnlargedImage(image)}
                    />
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(selectedModal.data.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed">{selectedModal.data.detailedComment}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, onOpenModal }: { testimonial: any; onOpenModal: (modal: any) => void }) => {
  return (
    <Card 
      className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
      onClick={() => onOpenModal({ type: 'testimonial', data: testimonial })}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={testimonial.images[0]}
          alt={`${testimonial.name} profile`}
          className="w-full h-fill object-cover"
        />
      </div>
      <CardContent className="p-6">
        {/* <div className="flex items-center mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div> */}
        <p className="text-gray-600 mb-4">{testimonial.comment}</p>
        <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
      </CardContent>
    </Card>
  );
};

export default SuccessStories;
