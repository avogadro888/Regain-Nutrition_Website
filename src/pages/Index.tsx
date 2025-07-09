import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  MapPin,
  Mail,
  Phone,
  X,
  TrendingUp,
  Users,
  Target,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<any>(null);
  const [currentActivitySlide, setCurrentActivitySlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const stats = [
    {
      number: "50+",
      label: "Satisfied Customers",
      description: "Happy clients worldwide",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      number: "10+",
      label: "Active Teams",
      description: "Professional teams working",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
      delay: "150ms",
    },
    {
      number: "10+",
      label: "Product and Services",
      description: "Comprehensive solutions",
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      delay: "300ms",
    },
    {
      number: "24+",
      label: "Hours Support Team",
      description: "Round-the-clock assistance",
      icon: Award,
      gradient: "from-orange-500 to-red-500",
      delay: "450ms",
    },
  ];

  const carouselImages = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    //"https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  ];

  const products = [
    {
      id: 1,
      name: "Ayurvedic Nutrition",
      description:
        "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: [
        ""
      ],
      images: ["/products/pd1.jpeg"],
    },
    {
      id: 2,
      name: "Bone & Joint Health",
      description:
        "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: [
        ""
      ],
      images: ["/products/pd2.jpeg"],
    },
    {
      id: 3,
      name: "Digestive Health",
      description:
        "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: [
        ""
      ],
      images: ["/products/pd3.jpeg"],
    },
    {
      id: 4,
      name: "Energy Drink",
      description:
        "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: [
        ""
      ],
      images: ["/products/pd4.jpeg"],
    },
    {
      id: 5,
      name: "Eye Health",
      description:
        "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: [
        ""
      ],
      images: ["/products/pd5.jpeg"],
    },
    {
      id: 6,
      name: "Heart Health",
      description:
        "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: [
        ""
      ],
      images: ["/products/pd6.jpeg"],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Renjini Rajesh",
      comment: "Amazing body transformation.",
      detailedComment:
        "Check the Body Transformation after choosing our Service. NB: Result are not typical individual result will vary.",
      images: ["/testimonials/tst1.png"],
    },
    {
      id: 2,
      name: "Augustine",
      rating: 5,
      comment: "Check the body transformation after choosing our service.",
      detailedComment:
        "Check the body transformation after choosing our service.",
      images: [
        "/testimonials/tst2.png",
        "/testimonials/tst2_x.png",
      ],
    },
    {
      id: 3,
      name: "Sadanandan",
      rating: 5,
      comment: "Check the body transformation after choosing our service.",
      detailedComment:
        "Check the body transformation after choosing our service.",
      images: ["/testimonials/tst3.png"],
    },
    {
      id: 4,
      name: "E.P. Mercy",
      rating: 5,
      comment:
        "EP Mercy achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      detailedComment:
        "EP Mercy achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      images: ["/testimonials/tst4.png"],
    },
    {
      id: 5,
      name: "Rajesh",
      rating: 5,
      comment:
        "Rajesh achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      detailedComment:
        "Rajesh achieved an incredible 18 kgs weight loss with the help of our personalized services.",
      images: [
        "/testimonials/tst5.png",
        "/testimonials/tst5_x.png",
      ],
    },
    {
      id: 6,
      name: "Rishikeshan",
      rating: 5,
      comment:
        "Rishikeshan achieved an incredible 12 kg weight loss with the help of our personalized services.",
      detailedComment:
        "Rishikeshan achieved an incredible 12 kg weight loss with the help of our personalized services.",
      images: ["/testimonials/tst6.png"],
    },
  ];

  const activities = [
    {
      id: 1,
      name: "Club Activity",
      description:
        "",
      category: "Activity",
      testimonials: [
        {
          name: "Regain Life Nutrition Centre, Valiyannur",
          comment: "25 September 2024",
        },
      ],
      images: [
        "/activities/act1.jpeg",
        /*"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"*/
      ],
    },
    {
      id: 2,
      name: "Club Activity",
      description:
        "",
      category: "Activity",
      testimonials: [
        {
          name: "Regain Life Nutrition Centre, Valiyannur",
          comment: "25 September 2024",
        },
      ],
      images: [
        "/activities/act2.jpeg",
        /*"https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"*/
      ],
    },
    {
      id: 3,
      name: "Club Activity",
      description:
        "",
      category: "Activity",
      testimonials: [
        {
          name: "Regain Life Nutrition Centre, Valiyannur",
          comment: "25 September 2024",
        },
      ],
      images: [
        "/activities/act3.jpeg",
        /*"https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"*/
      ],
    },
    {
      id: 4,
      name: "Club Activity",
      description:
        "",
      category: "Activity",
      testimonials: [
        {
          name: "Regain Life Nutrition Centre, Valiyannur",
          comment: "25 September 2024",
        },
      ],
      images: [
        "/activities/act4.jpeg",
        // "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        // "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    },
    {
      id: 5,
      name: "Club Activity",
      description:
        "",
      category: "Activity",
      testimonials: [
        {
          name: "Regain Life Nutrition Centre, Valiyannur",
          comment: "25 September 2024",
        },
      ],
      images: [
        "/activities/act5.jpeg",
        // "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        // "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivitySlide((prev) => (prev + 1) % activities.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activities.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductSlide(
        (prev) => (prev + 1) % Math.ceil(products.length / 3)
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const nextActivitySlide = () => {
    setCurrentActivitySlide((prev) => (prev + 1) % activities.length);
  };

  const prevActivitySlide = () => {
    setCurrentActivitySlide(
      (prev) => (prev - 1 + activities.length) % activities.length
    );
  };

  const nextProductSlide = () => {
    setCurrentProductSlide(
      (prev) => (prev + 1) % Math.ceil(products.length / 3)
    );
  };

  const prevProductSlide = () => {
    setCurrentProductSlide(
      (prev) =>
        (prev - 1 + Math.ceil(products.length / 3)) %
        Math.ceil(products.length / 3)
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-blue"
        } ${isNavbarHovered ? "navbar-wave-effect" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/why-us"
                className="hover:text-green-600 transition-colors font-medium"
              >
                Why Us
              </Link>
              <Link
                to="/success-stories"
                className="hover:text-green-600 transition-colors font-medium"
              >
                Success
              </Link>
              <a
                href="#about"
                className="hover:text-green-600 transition-colors font-medium"
              >
                About
              </a>
            </div>

            <div
              className="flex-shrink-0"
              onMouseEnter={() => setIsNavbarHovered(true)}
              onMouseLeave={() => setIsNavbarHovered(false)}
            >
              <img
                src="/LOGO-RN.png"
                alt="Regain Life Nutrition Centre Logo"
                style={{ marginLeft: "55px" }}
                className="h-10 w-auto transition-transform duration-100 hover:scale-910"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/activities"
                className="hover:text-green-600 transition-colors font-medium"
              >
                Activities
              </Link>
              <Link
                to="/products"
                className="hover:text-green-600 transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div
                    className={`w-full h-0.5 bg-current transition-transform ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-current transition-opacity ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-0.5 bg-current transition-transform ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4 space-y-4">
              <Link
                to="/why-us"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Why Us
              </Link>
              <Link
                to="/products"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Products
              </Link>
              <Link
                to="/success-stories"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Success
              </Link>
              <Link
                to="/activities"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Activities
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Contact
              </Link>
              <a
                href="#products"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Shop
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                About
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ${
                  index === currentSlide
                    ? "scale-110 animate-zoom-in-out"
                    : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}

          {/* Logo overlay - only visible on large screens */}

          <div className="relative h-full w-full">
            {" "}
            {/* Parent must be relative and full-width */}
            <div className="absolute top-1/2 -mt-[10px] -right-[200px] transform -translate-y-1/2 z-10 hidden lg:block">
              <img
                src="/LOGO-RN.png"
                alt="Regain Life Nutrition Centre Logo"
                className="opacity-70 h-[560px] w-auto"
              />
            </div>
          </div>

          {/* Navigation arrows with proper click handlers */}
          <div className="absolute bottom-8 left-8 flex space-x-4 z-20">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevSlide();
              }}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextSlide();
              }}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Hero content */}
          <div className="absolute inset-0 flex items-center justify-center text-center z-10">
            <div className="max-w-4xl px-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                Regain Life Nutrition Centre
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up-delay">
                Empowering healthy living with personalized nutrition plans for
                a balanced and vibrant lifestyle.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-slide-up-delay-2">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section
        id="about"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute -mt-[300px] sm:-mt-[290px]  inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: "transform",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-5xl font-bold text-white mb-8">Who We Are</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Do you want a healthy life? Through a simple nutrition diet, you
                can lose and gain weight without any side effects by eliminating
                the fat accumulated in the body. At the same time, it helps to
                maintain the beauty of your body. What is good food? Lifestyle?
                We warmly welcome you to Regain Life Nutrition Center to learn
                more about this.
              </p>
              {/*<p className="text-xl text-white/90 mb-6 leading-relaxed">
                Regain Life Nutrition Centre is a leading provider of premium nutritional supplements, dedicated to helping you achieve your health and fitness goals. With over a decade of experience in the industry, we combine cutting-edge science with natural ingredients to deliver results you can trust.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our team of nutritionists, scientists, and fitness experts work tirelessly to formulate products that meet the highest standards of quality and effectiveness. We believe that proper nutrition is the foundation of a healthy lifestyle.
              </p>*/}
              <Button
                onClick={() => setSelectedModal({ type: "about" })}
                className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </Button>
            </div>
            <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row justify-center items-center gap-4">
  <video
    src="videos/vid1.mp4"
    className="h-[500px] w-auto rounded-lg"
    autoPlay
    loop
    muted
  />
  <video
    src="videos/vid2.mp4"
    className="h-[500px] w-auto rounded-lg"
    autoPlay
    loop
    muted
  />
</div>
            <div className="animate-on-scroll opacity-0"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive nutrition solutions designed to support your journey
              to optimal health and peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Supplements",
                description:
                  "High-quality proteins, vitamins, and minerals sourced from the finest ingredients worldwide.",
                icon: "💊",
                detailedDescription:
                  "Our premium supplements are manufactured in FDA-approved facilities using the latest technology and stringent quality control measures. Every batch is third-party tested for purity, potency, and safety.",
              },
              {
                title: "Custom Nutrition Plans",
                description:
                  "Personalized nutrition strategies tailored to your specific goals and dietary requirements.",
                icon: "📊",
                detailedDescription:
                  "Our certified nutritionists work with you to create customized meal plans and supplement regimens based on your individual goals, body composition, activity level, and dietary preferences.",
              },
              {
                title: "Expert Consultation",
                description:
                  "One-on-one guidance from certified nutritionists and fitness professionals.",
                icon: "🥗",
                detailedDescription:
                  "Get personalized advice from our team of experts who have helped thousands of clients achieve their health and fitness goals. Schedule consultations via phone, video call, or in-person meetings.",
              },
              {
                title: "Research-Backed Formulas",
                description:
                  "Products developed using the latest scientific research and clinical studies.",
                icon: "🔬",
                detailedDescription:
                  "Every product in our lineup is formulated based on peer-reviewed research and clinical studies. We stay current with the latest nutritional science to ensure our formulas are both effective and safe.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Third-party tested supplements ensuring purity, potency, and safety.",
                icon: "✅",
                detailedDescription:
                  "We go beyond industry standards with comprehensive testing protocols. Every product is tested for heavy metals, contaminants, and potency by independent laboratories.",
              },
              {
                title: "Fast Delivery",
                description:
                  "Quick and reliable shipping to get your supplements delivered when you need them.",
                icon: "🚚",
                detailedDescription:
                  "Enjoy free shipping on orders over ₹1500 with delivery within 2-3 business days. Track your order in real-time and get notifications about delivery status.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() =>
                  setSelectedModal({ type: "service", data: service })
                }
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The Pulse of Excitement : Uncover, Unleash, Unwind
            </p>
            <Link to="/activities">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View More <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentActivitySlide * 100}%)`,
                }}
              >
                {activities.map((activity, index) => (
                  <div key={activity.id} className="w-full flex-shrink-0">
                    <ActivitySlide
                      activity={activity}
                      onOpenModal={setSelectedModal}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button
                onClick={prevActivitySlide}
                className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button
                onClick={nextActivitySlide}
                className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {activities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentActivitySlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentActivitySlide
                      ? "bg-green-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Regain Life Nutrition Centre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our dedicated team of experts is committed to your success. Meet
              the professionals who make it all possible.
            </p>
            <Link to="/why-us">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View More <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedModal({ type: 'team', data: member })}
              >
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>*/}

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-1000 hover:shadow-2xl hover:-translate-y-2  animate-on-scroll opacity-0 animate-fade-in`}
                  >
                    {/* Gradient background overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 `}
                    />

                    <div className="relative p-8">
                      {/* Icon with gradient background */}
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-6 transition-all duration-700`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Counter */}
                      <div className={`transition-all duration-800`}>
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                          {stat.label}
                        </h3>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {stat.description}
                        </p>
                      </div>

                      {/* Decorative corner accent */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Do */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: "transform",
          }}
        ></div>
        <div
          className="absolute -mt-[3000px] sm:-mt-[2000px] inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: "transform",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/90 via-blue-800/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div className="animate-on-scroll opacity-0">
              <img
                src="/AD1.jpg"
                alt="Regain Life Nutrition Centre Logo"
                className="h-[600px] w-auto mb-4 mx-auto"
              />
            </div>
            <div className="animate-on-scroll opacity-0 text-center sm:text-left">
              <h1 className="text-5xl font-bold text-white mb-8">
                Celebrating Our 1<sup>st</sup> Anniversary!
              </h1>

              <p className="text-xl text-white/90 mb-6 leading-relaxedv">
                Take a Step Toward a Healthier Life – With Just One Nutrition
                Evaluation!
              </p>

              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                To celebrate one successful year of transforming lives through
                good nutrition,{" "}
                <span className="font-bold">REGAIN Nutrition Centre</span> is
                offering a{" "}
                <span className="font-bold">FREE Body Fat Checkup</span>!
              </p>

              <blockquote className="italic font-semibold text-lg mb-6">
                “A single nutrition consultation can help transform your entire
                life for the better.”
              </blockquote>

              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Whether you're aiming to manage your weight, improve your
                fitness, or lead a healthier lifestyle, our expert-guided{" "}
                <span className="font-medium text-700">
                  Personalized Wellness Plan
                </span>{" "}
                is designed just for you.
              </p>
              <Link to="/contact">
                <Button
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 mt-4 mb-4"
                >
                  Hear more about our process{" "}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products - Updated with sliding functionality */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our premium line of scientifically-formulated supplements
              designed to support your health and fitness goals.
            </p>
            <Link to="/products">
              <Button
                onClick={() => window.scrollTo(0, 0)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View All Products <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentProductSlide * 100}%)`,
                }}
              >
                {Array.from(
                  { length: Math.ceil(products.length / 3) },
                  (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                        {products
                          .slice(slideIndex * 3, slideIndex * 3 + 3)
                          .map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              onOpenModal={setSelectedModal}
                            />
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button
                onClick={prevProductSlide}
                className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button
                onClick={nextProductSlide}
                className="bg-white shadow-lg hover:shadow-xl text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from(
                { length: Math.ceil(products.length / 3) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentProductSlide
                        ? "bg-green-600"
                        : "bg-gray-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Real transformations from real people. See how Regain Life
              Nutrition Centre has helped our customers achieve their goals.
            </p>
            <Link to="/success-stories">
              <Button
                onClick={() => window.scrollTo(0, 0)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View All Stories <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onOpenModal={setSelectedModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get in touch with our team for personalized nutrition advice and
              support.
            </p>
            <Link to="/contact">
              <Button
                onClick={() => window.scrollTo(0, 0)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-500 mr-3" />
                  <span>Munderi Road, Valiyannur, Kannur, Kerala, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-3" />
                  <span>+91 7012721515</span>,<span>+91 9747260946</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-green-500 mr-3" />
                  <span>regainlife73@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=regain+nutrition+Munderi+Road,+Valiyannur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-10 md:pt-12 pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-right md:pr-14">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/why-us"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/success-stories"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <img
                src="/LOGO-RN.png"
                alt="Regain Life Nutrition Centre Logo"
                className="h-20 md:h-36 md:-mt-5 w-auto mb-4 mx-auto"
              />
              <p className="text-gray-300 font-semibold">
                Regain Life Nutrition Centre
              </p>
            </div>
            <div className="text-center md:text-left md:pl-14">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>

                <li>
                  <Link
                    to="/activities"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p className="text-[14px]">
              &copy; 2024 Regain Life Nutrition Centre. All rights reserved.{" "}
              <br />
              <br />
              <a
                href="https://www.codecattech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.codecattech.com/assets/imgs/template/CCT-%20LOGO-WHITE.webp"
                  alt="Regain Life Nutrition Centre Logo"
                  className="h-12 w-auto mb-1 mx-auto"
                />
                Website developed by CODECAT
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[100vh]">
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute -top-0 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={enlargedImage}
              alt="Enlarged view"
              className="max-auto max-h-96 object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">
                {selectedModal.type === "product" && selectedModal.data.name}
                {selectedModal.type === "testimonial" &&
                  `${selectedModal.data.name}'s Story`}
                {selectedModal.type === "team" && selectedModal.data.name}
                {selectedModal.type === "service" && selectedModal.data.title}
                {selectedModal.type === "about" &&
                  "About Regain Life Nutrition Centre"}
                {selectedModal.type === "process" && "Our Process"}
                {selectedModal.type === "activity" && selectedModal.data.name}
              </h2>
              <button onClick={() => setSelectedModal(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {selectedModal.type === "product" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ProductImageCarousel
                        images={selectedModal.data.images}
                        productName={selectedModal.data.name}
                        onImageClick={setEnlargedImage}
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 mb-4">
                        {selectedModal.data.detailedDescription}
                      </p>
                      <div className="space-y-2 mb-6">
                        {selectedModal.data.features.map(
                          (feature: string, index: number) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              <span>{feature}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedModal.type === "testimonial" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedModal.data.images.map(
                      (image: string, index: number) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${selectedModal.data.name} ${
                            index === 0 ? "profile" : `transformation ${index}`
                          }`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => setEnlargedImage(image)}
                        />
                      )
                    )}
                  </div>
                  <div className="flex items-center mb-4">
               
                  </div>
                  <p className="text-lg leading-relaxed">
                    {selectedModal.data.detailedComment}
                  </p>
                </div>
              )}

              {selectedModal.type === "team" && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <img
                      src={selectedModal.data.image}
                      alt={selectedModal.data.name}
                      className="w-32 h-32 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setEnlargedImage(selectedModal.data.image)}
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {selectedModal.data.name}
                      </h3>
                      <p className="text-green-600 text-xl font-semibold">
                        {selectedModal.data.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed">
                    {selectedModal.data.detailedBio}
                  </p>
                </div>
              )}

              {selectedModal.type === "service" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {selectedModal.data.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {selectedModal.data.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed">
                    {selectedModal.data.detailedDescription}
                  </p>
                </div>
              )}

              {selectedModal.type === "about" && (
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Step into a world of possibilities at REGAIN LIFE NUTRITION
                    CENTRE. Our catalog showcases an array of exceptional
                    products and services tailored to meet your needs. Need
                    guidance or have specific requirements? Our team is here to
                    assist you personally.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Reach out to us at +919747260946 or +917012721515 for
                    tailored recommendations or any inquiries. Your journey
                    towards exceptional products and services begins with us at
                    REGAIN LIFE NUTRITION CENTRE.
                  </p>
                </div>
              )}

              {selectedModal.type === "process" && (
                <div className="space-y-8">
                  {[
                    {
                      step: "Research & Development",
                      description:
                        "Our team of scientists and nutritionists research the latest studies and identify the most effective ingredients and dosages.",
                    },
                    {
                      step: "Premium Sourcing",
                      description:
                        "We source only the highest quality raw materials from trusted suppliers who meet our strict standards for purity and sustainability.",
                    },
                    {
                      step: "Advanced Manufacturing",
                      description:
                        "Our products are manufactured in FDA-approved facilities using state-of-the-art equipment and strict quality control measures.",
                    },
                    {
                      step: "Quality Testing",
                      description:
                        "Every batch undergoes rigorous third-party testing for purity, potency, and safety before it reaches our customers.",
                    },
                    {
                      step: "Customer Satisfaction",
                      description:
                        "We provide ongoing support and education to help our customers achieve their health and fitness goals with our products.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {item.step}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {selectedModal.type === "activity" && (
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
                        <p className="text-gray-600">
                          {selectedModal.data.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">
                            Details:
                          </h4>
                          {selectedModal.data.testimonials.map(
                            (testimonial: any, index: number) => (
                              <div
                                key={index}
                                className="bg-gray-50 p-3 rounded-lg"
                              >
                                <div className="flex items-center mb-2">
                                  <div className="flex">
                                    {[...Array(testimonial.rating)].map(
                                      (_, i) => (
                                        <MapPin key={i} className="w-4 h-4" />
                                      )
                                    )}
                                  </div>
                                  <span className="ml-2 font-medium text-sm">
                                    {testimonial.name}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 italic">
                                  {testimonial.comment}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Activity Slide Component
const ActivitySlide = ({
  activity,
  onOpenModal,
}: {
  activity: any;
  onOpenModal: (modal: any) => void;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % activity.images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activity.images.length]);

  return (
    <Card
      className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer mx-4"
      onClick={() => onOpenModal({ type: "activity", data: activity })}
    >
      <div className="relative h-screen sm:h-screen md:h-96 overflow-hidden">
  {activity.images.map((image: string, index: number) => (
    <img
      key={index}
      src={image}
      alt={activity.name}
      className={`absolute inset-0 w-full h-full object-cover md:-mt-[-140px] md:object-fill md:h-[calc(100%+125px)] transition-opacity duration-500 ${
        index === currentImage ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
    {activity.category}
  </div>
</div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {activity.name}
        </h3>
        <p className="text-gray-600 mb-6">{activity.description}</p>

        <div className="space-y-4">
          <h4 className="font-semibold text-gray-900">Details:</h4>
          {activity.testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MapPin key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="ml-2 font-medium">{testimonial.name}</span>
              </div>
              <p className="text-gray-600 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Activity Image Carousel Component
const ActivityImageCarousel = ({
  images,
  activityName,
  onImageClick,
}: {
  images: string[];
  activityName: string;
  onImageClick?: (image: string) => void;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
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
              index === currentImage ? "opacity-100" : "opacity-0"
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
              index === currentImage ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Product Image Carousel Component
const ProductImageCarousel = ({
  images,
  productName,
  onImageClick,
}: {
  images: string[];
  productName: string;
  onImageClick?: (image: string) => void;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${productName} ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer hover:scale-105 ${
              index === currentImage ? "opacity-100" : "opacity-0"
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
              index === currentImage ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({
  product,
  onOpenModal,
}: {
  product: any;
  onOpenModal: (modal: any) => void;
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <Card className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
      <div
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => onOpenModal({ type: "product", data: product })}
      >
        {product.images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        {/*<div className="space-y-2 mb-4">
          {product.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>*/}
        <Button
          onClick={() => onOpenModal({ type: "product", data: product })}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 mb-2"
        >
          View Details
        </Button>

        <Button
          onClick={() =>
            window.open(
              `https://wa.me/+919747260946?text=${encodeURIComponent(
                "Hi Regain Nutrition Centre,\n\n I'm interested in your " +
                  product.name +
                  " product. Can you please provide more details and pricing?"
              )}`,
              "_blank"
            )
          }
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300"
        >
          Inquire
        </Button>
      </CardContent>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
  onOpenModal,
}: {
  testimonial: any;
  onOpenModal: (modal: any) => void;
}) => {
  return (
    <Card
      className="animate-on-scroll opacity-0 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
      onClick={() => onOpenModal({ type: "testimonial", data: testimonial })}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={testimonial.images[0]}
          alt={`${testimonial.name} profile`}
          className="w-full h-auto object-fill absolute"
        />
      </div>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 italic">{testimonial.comment}</p>
        <p className="text-lg font-semibold text-gray-900">
          {testimonial.name}
        </p>
      </CardContent>
    </Card>
  );
};

export default Index;
