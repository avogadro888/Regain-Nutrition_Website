import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Activities = () => {
  const [selectedModal, setSelectedModal] = useState<any>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const activities = [
    {
      id: 1,
      name: "Club Activity",
      description: "Comprehensive strength training routines designed for all fitness levels.",
      category: "Activity",
      testimonials: [
        { name: "Regain Life Nutrition Centre, Valiyannur", comment: "25 September 2024"},
      ],
      images: [
        "/activities/act1.jpeg",
        /*"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"*/
      ]
    },
    {
      id: 2,
      name: "Club Activity",
      description: "One-on-one sessions with certified nutritionists to optimize your diet.",
      category: "Activity",
      testimonials: [
        { name: "Regain Life Nutrition Centre, Valiyannur", comment: "25 September 2024"},
      ],
      images: [
        "/activities/act2.jpeg",
        /*"https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"*/
      ]
    },
    {
      id: 3,
      name: "Club Activity",
      description: "High-intensity cardio workouts to improve cardiovascular health.",
      category: "Activity",
      testimonials: [
        { name: "Regain Life Nutrition Centre, Valiyannur", comment: "25 September 2024"},
      ],
      images: [
        "/activities/act3.jpeg",
        /*"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"*/
      ]
    },
    {
      id: 4,
      name: "Flexibility & Mobility",
      description: "Stretching and mobility sessions to improve range of motion.",
      category: "Activity",
      testimonials: [
        { name: "Regain Life Nutrition Centre, Valiyannur", comment: "25 September 2024"},
      ],
      images: [
        "/activities/act4.jpeg",
        // "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        // "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      name: "Meal Prep Workshops",
      description: "Learn to prepare healthy, nutritious meals for the week ahead.",
      category: "Activity",
      testimonials: [
        { name: "Regain Life Nutrition Centre, Valiyannur", comment: "25 September 2024"},
      ],
      images: [
        "/activities/act5.jpeg",
        // "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        // "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            <h1 className="text-5xl font-bold mb-6">Our Activities</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover our comprehensive range of fitness and wellness activities designed to support your health journey.
              From strength training to nutritional counseling, we have programs for every fitness level and goal.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={activity.id} activity={activity} onOpenModal={setSelectedModal} />
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
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">{selectedModal.data.name}</h2>
              <button onClick={() => setSelectedModal(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ActivityImageCarousel 
                      images={selectedModal.data.images} 
                      activityName={selectedModal.data.name} 
                      onImageClick={setEnlargedImage}
                    />
                  </div>
                  <div>
                    <div className="space-y-4">
                      <div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {selectedModal.data.category}
                        </span>
                      </div>
                      {/*<p className="text-gray-600">{selectedModal.data.description}</p>*/}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Client Testimonials:</h4>
                        {selectedModal.data.testimonials.map((testimonial: any, index: number) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center mb-2">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="ml-2 font-medium text-sm">{testimonial.name}</span>
                            </div>
                            <p className="text-sm text-gray-600 italic">"{testimonial.comment}"</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

// Activity Card Component
const ActivityCard = ({ activity, onOpenModal }: { activity: any; onOpenModal: (modal: any) => void }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % activity.images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activity.images.length]);

  return (
    <Card 
      className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
      onClick={() => onOpenModal({ type: 'activity', data: activity })}
    >
      <div className="relative h-64 overflow-hidden">
        {activity.images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={activity.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {activity.category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.name}</h3>
        {/*<p className="text-gray-600 mb-4">{activity.description}</p>*/}
        
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900 text-sm">Featured Testimonials:</h4>
          {activity.testimonials.slice(0, 2).map((testimonial: any, index: number) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-medium text-xs">{testimonial.name}</span>
              </div>
              <p className="text-xs text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Activity Image Carousel Component
const ActivityImageCarousel = ({ images, activityName, onImageClick }: { images: string[]; activityName: string; onImageClick?: (image: string) => void }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${activityName} ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer hover:scale-105 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => onImageClick?.(image)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-green-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Activities;
