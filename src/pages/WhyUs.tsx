import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const WhyUs = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      position: "Chief Nutritionist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6bb6bae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "PhD in Nutritional Science with 15+ years experience",
      detailedBio: "Dr. Sarah Mitchell holds a PhD in Nutritional Science from Harvard University and has over 15 years of experience in clinical nutrition and sports performance. She has worked with Olympic athletes and published numerous research papers on protein synthesis and muscle recovery."
    },
    {
      name: "Mark Johnson",
      position: "Head of Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former Olympic athlete and sports nutrition expert",
      detailedBio: "Mark Johnson is a former Olympic weightlifter who transitioned into sports nutrition research. With his firsthand experience in elite athletics and advanced degree in Exercise Physiology, he leads our product development team in creating cutting-edge supplements."
    },
    {
      name: "Dr. Emily Chen",
      position: "Quality Assurance Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Biochemist ensuring the highest product standards",
      detailedBio: "Dr. Emily Chen is a certified biochemist with expertise in supplement manufacturing and quality control. She ensures every RXNutrition product meets the highest standards of purity, potency, and safety through rigorous testing protocols."
    },
    {
      name: "James Rodriguez",
      position: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Dedicated to ensuring every customer achieves their goals",
      detailedBio: "James Rodriguez brings 10 years of customer service excellence and nutrition coaching experience. He leads our customer success team in providing personalized guidance and support to help customers achieve their health and fitness goals."
    },
    {
      name: "Dr. Amanda Walker",
      position: "Clinical Research Director",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading clinical trials and product efficacy studies",
      detailedBio: "Dr. Amanda Walker oversees all clinical research initiatives at RXNutrition. With her background in clinical medicine and research methodology, she ensures our products are backed by solid scientific evidence and real-world efficacy studies."
    },
    {
      name: "Michael Thompson",
      position: "Manufacturing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Overseeing world-class manufacturing processes",
      detailedBio: "Michael Thompson brings 20 years of pharmaceutical manufacturing experience to RXNutrition. He ensures our state-of-the-art facilities operate at the highest standards, implementing cutting-edge technology and strict quality control measures."
    }
  ];

  const reasons = [
    {
      title: "Scientific Excellence",
      description: "Every product is backed by peer-reviewed research and clinical studies.",
      icon: "🔬",
      detailedDescription: "Our commitment to scientific excellence means every formula is developed based on the latest nutritional research. We collaborate with leading universities and research institutions to ensure our products deliver proven results."
    },
    {
      title: "Premium Quality",
      description: "Third-party tested for purity, potency, and safety.",
      icon: "✅", 
      detailedDescription: "Quality is non-negotiable at RXNutrition. Every batch undergoes rigorous third-party testing for heavy metals, contaminants, and potency. We exceed industry standards to ensure you receive only the purest, most effective supplements."
    },
    {
      title: "Expert Team",
      description: "Led by certified nutritionists, scientists, and fitness professionals.",
      icon: "👨‍🔬",
      detailedDescription: "Our diverse team of experts brings decades of combined experience in nutrition science, sports performance, and supplement manufacturing. This multidisciplinary approach ensures comprehensive solutions for your health goals."
    },
    {
      title: "Personalized Approach",
      description: "Customized nutrition plans tailored to your specific goals.",
      icon: "🎯",
      detailedDescription: "We understand that everyone's journey is unique. Our personalized approach includes detailed consultations, goal assessment, and customized supplement regimens designed specifically for your lifestyle and objectives."
    },
    {
      title: "Transparency",
      description: "Full ingredient disclosure and manufacturing process transparency.",
      icon: "📋",
      detailedDescription: "We believe in complete transparency. Every ingredient is clearly listed with exact amounts, sourcing information, and manufacturing details. No proprietary blends, no hidden ingredients - just honest, open communication about what you're putting in your body."
    },
    {
      title: "Results-Driven",
      description: "Proven track record with thousands of satisfied customers.",
      icon: "📈",
      detailedDescription: "Our success is measured by your results. With thousands of successful transformations and a 98% customer satisfaction rate, we have a proven track record of helping people achieve their health and fitness goals."
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
            <h1 className="text-5xl font-bold mb-6">Why Choose RXNutrition</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover what sets us apart in the world of nutritional supplements. Our commitment to excellence, 
              scientific integrity, and customer success makes us the trusted choice for health-conscious individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedication to quality, science, and customer success sets us apart from other supplement companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  <p className="text-sm text-gray-500">{reason.detailedDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to your success. Each member brings unique expertise 
              and passion to help you achieve your health and fitness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <p className="text-xs text-gray-500">{member.detailedBio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
