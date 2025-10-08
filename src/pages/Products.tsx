import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedModal, setSelectedModal] = useState<any>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const products = [
    {
      id: 1,
      name: "Ayurvedic Nutrition",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["25g Protein per serving", "Fast absorption", "Great taste", "Third-party tested"],
      images: [
        "/products/pd1.jpeg",
      ]
    },
    {
      id: 2,
      name: "Bone & Joint Health",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["2:1:1 BCAA ratio", "Natural caffeine", "Zero sugar", "Electrolytes"],
      images: [
        "/products/pd2.jpeg",
      ]
    },
    {
      id: 3,
      name: "Digestive Health",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["5g per serving", "Micronized formula", "Unflavored", "Research proven"],
      images: [
        "/products/pd3.jpeg",
      ]
    },
    {
      id: 4,
      name: "Energy Drink",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["300mg Caffeine", "Beta-alanine formula", "Enhanced focus", "Great flavors"],
      images: [
        "/products/pd4.jpeg",
      ]
    },
    {
      id: 5,
      name: "Eye Health",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["1000mg per capsule", "Wild-caught fish", "Molecularly distilled", "No fishy aftertaste"],
      images: [
        "/products/pd5.jpeg",
      ]
    },
    {
      id: 6,
      name: "Heart Health",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["25 vitamins & minerals", "Daily essential nutrients", "Immune support", "Energy boost"],
      images: [
        "/products/pd6.jpeg",
      ]
    },
    {
      id: 7,
      name: "Kids Nutrition",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["5g pure L-Glutamine", "Muscle recovery", "Immune support", "Unflavored powder"],
      images: [
        "/products/pd7.jpeg",
      ]
    },
    {
      id: 8,
      name: "Male & Female Health",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["Slow-release protein", "8-hour amino acid supply", "Rich in calcium", "Creamy texture"],
      images: [
        "/products/pd8.jpeg",
      ]
    },
    {
      id: 9,
      name: "Skin Health",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["Zinc & Magnesium", "Sleep quality support", "Hormone optimization", "Recovery enhancement"],
      images: [
        "/products/pd9.jpeg",
      ]
    },
    {
      id: 10,
      name: "Sports Nutrition",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["Zinc & Magnesium", "Sleep quality support", "Hormone optimization", "Recovery enhancement"],
      images: [
        "/products/pd10.jpeg",
      ]
    },
    {
      id: 11,
      name: "Weight Management Product",
      description: "Disclaimer: THESE PRODUCTS ARE NOT INTENDED TO DIAGNOSE, TREAT OR CURE ANY DISEASE.",
      detailedDescription: "Category: Products",
      features: ["Zinc & Magnesium", "Sleep quality support", "Hormone optimization", "Recovery enhancement"],
      images: [
        "/products/pd11.jpeg",
      ]
    }
  ];

  useEffect(() => {
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
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover our premium line of scientifically-formulated supplements designed to support your health and fitness goals.
              Each product is third-party tested for purity and potency.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} onOpenModal={setSelectedModal} />
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
              <h2 className="text-2xl font-bold">{selectedModal.data.name}</h2>
              <button onClick={() => setSelectedModal(null)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
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
                    <p className="text-gray-600 mb-4">{selectedModal.data.detailedDescription}</p>
                    {/*<div className="space-y-2 mb-6">
                      {selectedModal.data.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>*/}
                    <Button
  onClick={() =>
    window.open(
      `https://wa.me/+919747260946?text=${encodeURIComponent(
        'Hi Regain Nutrition Centre,\n\n I\'m interested in your ' + selectedModal.data.name + ' product. Can you please provide more details and pricing?'
      )}`,
      '_blank'
    )
  }
  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300"
>
  Inquire
</Button>
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

// Product Image Carousel Component
const ProductImageCarousel = ({ images, productName, onImageClick }: { images: string[]; productName: string; onImageClick?: (image: string) => void }) => {
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
            className={`absolute inset-0 w-full object-top transition-opacity duration-500 cursor-pointer hover:scale-105 ${
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

// Product Card Component
const ProductCard = ({ product, onOpenModal }: { product: any; onOpenModal: (modal: any) => void }) => {
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
        onClick={() => onOpenModal({ type: 'product', data: product })}
      >
        {product.images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={product.name}
            className={`absolute inset-0 w-full object-top transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-gray-600 mb-4 font-bold">{product.detailedDescription}</p>
        {/*<div className="space-y-2 mb-4">
          {product.features.map((feature: string, index: number) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>*/}
        <Button 
          onClick={() => onOpenModal({ type: 'product', data: product })}
          className="w-full mb-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300"
        >
          View Details
        </Button>
        <Button
  onClick={() =>
    window.open(
      `https://wa.me/+919747260946?text=${encodeURIComponent(
        'Hi Regain Nutrition Centre,\n\n I\'m interested in your ' + product.name + ' product. Can you please provide more details and pricing?'
      )}`,
      '_blank'
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

export default Products;
